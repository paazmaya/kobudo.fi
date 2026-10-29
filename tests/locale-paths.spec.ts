import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { test, expect } from "@playwright/test";
import { FI_TO_EN, EN_TO_FI } from "../src/utils/localePaths";

const ROOT = process.cwd();
const FI_DOCS_DIR = join(ROOT, "docs");
const EN_DOCS_DIR = join(ROOT, "i18n", "en", "docusaurus-plugin-content-docs", "current");

function findMdxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      results.push(fullPath);
    }
  }
  return results.sort();
}

function extractSlug(filePath: string): string | null {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^slug:\s*(\S+)/m);
  return match ? match[1] : null;
}

test.describe("localePaths and i18n alignment", () => {
  test("every Finnish doc has a matching English doc and FI_TO_EN mapping", () => {
    const fiFiles = findMdxFiles(FI_DOCS_DIR).map((f) => relative(FI_DOCS_DIR, f));
    const enFiles = findMdxFiles(EN_DOCS_DIR).map((f) => relative(EN_DOCS_DIR, f));

    expect(enFiles).toEqual(fiFiles);

    for (const relPath of fiFiles) {
      const fiSlug = extractSlug(join(FI_DOCS_DIR, relPath));
      const enSlug = extractSlug(join(EN_DOCS_DIR, relPath));

      expect(fiSlug, `Missing slug in docs/${relPath}`).toBeTruthy();
      expect(enSlug, `Missing slug in i18n/en/.../${relPath}`).toBeTruthy();

      expect(
        FI_TO_EN[fiSlug!],
        `FI_TO_EN["${fiSlug}"] should map to "${enSlug}" for ${relPath}`,
      ).toBe(enSlug);
      expect(
        EN_TO_FI[enSlug!],
        `EN_TO_FI["${enSlug}"] should map to "${fiSlug}" for ${relPath}`,
      ).toBe(fiSlug);
    }
  });

  test("static/_redirects covers all differing FI and EN slugs", () => {
    const redirectsContent = readFileSync(join(ROOT, "static", "_redirects"), "utf-8");

    for (const [fiSlug, enSlug] of Object.entries(FI_TO_EN)) {
      if (fiSlug === enSlug) continue;

      expect(redirectsContent, `Missing redirect for /en${fiSlug} -> ${fiSlug}`).toContain(
        `/en${fiSlug} ${fiSlug} 301!`,
      );
      expect(redirectsContent, `Missing redirect for ${enSlug} -> /en${enSlug}`).toContain(
        `${enSlug} /en${enSlug} 301!`,
      );
    }
  });
});
