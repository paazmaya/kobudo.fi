#!/usr/bin/env node

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { request } from "playwright";

const ROOT_DIR = process.cwd();
const MD_EXTENSIONS = new Set([".md"]);
const SKIP_FILE_PATTERNS = [/^link-check-report/i, /^external-link-report/i];
const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  "build",
  "dist",
  ".docusaurus",
  ".next",
  ".cache",
  ".idea",
  ".vscode",
]);

const TIMEOUT_MS = Number.parseInt(process.env.EXTERNAL_LINK_TIMEOUT_MS || "15000", 10);
const MAX_CONCURRENCY = Number.parseInt(process.env.EXTERNAL_LINK_CONCURRENCY || "8", 10);
const REPORT_FILE = process.env.EXTERNAL_LINK_REPORT_FILE || "external-link-report.md";
const MAX_LINKS = Number.parseInt(process.env.EXTERNAL_LINK_MAX_LINKS || "0", 10);

function isMarkdownFile(fileName) {
  const lower = fileName.toLowerCase();
  for (const ext of MD_EXTENSIONS) {
    if (lower.endsWith(ext)) {
      for (const pattern of SKIP_FILE_PATTERNS) {
        if (pattern.test(fileName)) {
          return false;
        }
      }

      return true;
    }
  }
  return false;
}

function findMarkdownFiles(dirPath) {
  const files = [];
  const entries = readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    if (SKIP_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && isMarkdownFile(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function cleanupCandidate(url) {
  let value = url.trim();
  value = value.replace(/[>,\]}'"`]+$/g, "");

  while (/[.,;:!?)]$/.test(value)) {
    const openParenCount = (value.match(/\(/g) || []).length;
    const closeParenCount = (value.match(/\)/g) || []).length;

    if (value.endsWith(")") && closeParenCount <= openParenCount) {
      break;
    }

    value = value.slice(0, -1);
  }

  return value;
}

function extractExternalUrls(markdownContent) {
  const urls = [];

  const markdownLinkRegex = /\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g;
  const autoLinkRegex = /<\s*(https?:\/\/[^\s>]+)\s*>/g;
  const rawUrlRegex = /(?:^|[\s(])((?:https?:\/\/)[^\s<>()\[\]{}"'`]+)/g;

  const capture = (candidate) => {
    const cleaned = cleanupCandidate(candidate);
    if (!cleaned) {
      return;
    }

    try {
      const parsed = new URL(cleaned);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        parsed.hash = "";
        urls.push(parsed.toString());
      }
    } catch {
      // Skip malformed URLs.
    }
  };

  for (const match of markdownContent.matchAll(markdownLinkRegex)) {
    capture(match[1]);
  }

  for (const match of markdownContent.matchAll(autoLinkRegex)) {
    capture(match[1]);
  }

  for (const match of markdownContent.matchAll(rawUrlRegex)) {
    capture(match[1]);
  }

  return urls;
}

function escapeMarkdown(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function formatDateIso() {
  return new Date().toISOString();
}

function writeReport(report) {
  const lines = [];
  lines.push("# External Link Response Report");
  lines.push("");
  lines.push(`Generated: ${formatDateIso()}`);
  lines.push(`Scanned markdown files: ${report.markdownFileCount}`);
  lines.push(`Unique external URLs found: ${report.totalUrls}`);
  lines.push(`Checked URLs: ${report.checkedCount}`);
  lines.push(`Non-200 or failed URLs: ${report.non200Count}`);
  lines.push(`Timeout per request (ms): ${TIMEOUT_MS}`);
  lines.push("");

  lines.push("## Non-200 and Error Responses");
  lines.push("");

  if (report.non200.length === 0) {
    lines.push("All checked external URLs returned HTTP 200.");
    lines.push("");
  } else {
    lines.push("| URL | Status | Error | Found In | ");
    lines.push("| --- | --- | --- | --- |");

    for (const row of report.non200) {
      lines.push(
        `| ${escapeMarkdown(row.url)} | ${escapeMarkdown(row.status)} | ${escapeMarkdown(row.error || "")} | ${escapeMarkdown(row.sources.join(", "))} |`,
      );
    }

    lines.push("");
  }

  writeFileSync(REPORT_FILE, `${lines.join("\n")}\n`, "utf8");
}

async function checkUrlStatus(apiContext, url) {
  try {
    const response = await apiContext.get(url, {
      failOnStatusCode: false,
      timeout: TIMEOUT_MS,
      maxRedirects: 0,
    });

    return {
      url,
      status: response.status(),
      error: "",
    };
  } catch (error) {
    return {
      url,
      status: "ERROR",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function runWithConcurrency(items, workerCount, taskFn) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (true) {
      const currentIndex = index;
      index += 1;

      if (currentIndex >= items.length) {
        return;
      }

      results[currentIndex] = await taskFn(items[currentIndex], currentIndex);
    }
  }

  const workers = [];
  const safeWorkerCount = Math.max(1, Math.min(workerCount, items.length || 1));
  for (let i = 0; i < safeWorkerCount; i += 1) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return results;
}

async function main() {
  console.log("External Markdown Link Checker");
  console.log("=".repeat(50));

  const markdownFiles = findMarkdownFiles(ROOT_DIR);
  console.log(`Scanning markdown files: ${markdownFiles.length}`);

  const urlToSources = new Map();

  for (const filePath of markdownFiles) {
    const fileContent = readFileSync(filePath, "utf8");
    const externalUrls = extractExternalUrls(fileContent);
    const sourceName = relative(ROOT_DIR, filePath);

    for (const url of externalUrls) {
      if (!urlToSources.has(url)) {
        urlToSources.set(url, new Set());
      }
      urlToSources.get(url).add(sourceName);
    }
  }

  let urls = [...urlToSources.keys()].sort((a, b) => a.localeCompare(b));
  if (MAX_LINKS > 0) {
    urls = urls.slice(0, MAX_LINKS);
  }

  console.log(`Unique external URLs found: ${urlToSources.size}`);
  console.log(`Checking URLs: ${urls.length}`);

  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,
    userAgent: "kobudo.fi external-link-checker/1.0",
  });

  const checked = await runWithConcurrency(urls, MAX_CONCURRENCY, async (url, idx) => {
    process.stdout.write(`Checking ${idx + 1}/${urls.length}: ${url}\n`);
    return checkUrlStatus(apiContext, url);
  });

  await apiContext.dispose();

  const non200 = [];
  for (const result of checked) {
    if (result.status !== 200) {
      non200.push({
        ...result,
        sources: [...(urlToSources.get(result.url) || [])].sort((a, b) => a.localeCompare(b)),
      });
    }
  }

  writeReport({
    markdownFileCount: markdownFiles.length,
    totalUrls: urlToSources.size,
    checkedCount: checked.length,
    non200Count: non200.length,
    non200,
  });

  console.log("");
  console.log("Summary");
  console.log(`- Markdown files scanned: ${markdownFiles.length}`);
  console.log(`- Unique external URLs found: ${urlToSources.size}`);
  console.log(`- Checked URLs: ${checked.length}`);
  console.log(`- Non-200 or failed: ${non200.length}`);
  console.log(`- Report: ${REPORT_FILE}`);

  process.exit(non200.length === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
