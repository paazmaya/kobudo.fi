#!/usr/bin/env node
/**
 * Check CSS class usage in HTML build output
 * Compares class names found in HTML files against classes defined in custom.css
 *
 * Usage: node scripts/check-css-classes.mjs
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BUILD_DIR = join(__dirname, "..", "build");
const CSS_FILE = join(__dirname, "..", "src", "css", "custom.css");
const SRC_DIR = join(__dirname, "..", "src");

/**
 * Recursively find all files with given extensions in a directory
 * @param {string} dir - Directory to search
 * @param {string[]} extensions - File extensions to include (with dot)
 * @returns {Promise<string[]>} - Array of file paths
 */
async function findFilesByExtension(dir, extensions) {
  const files = [];

  async function traverse(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        // Skip node_modules and .docusaurus
        if (entry.name !== "node_modules" && entry.name !== ".docusaurus") {
          await traverse(fullPath);
        }
      } else if (entry.isFile() && extensions.includes(extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }

  await traverse(dir);
  return files;
}

/**
 * Recursively find all HTML files in a directory
 * @param {string} dir - Directory to search
 * @returns {Promise<string[]>} - Array of HTML file paths
 */
async function findHtmlFiles(dir) {
  return findFilesByExtension(dir, [".html"]);
}

/**
 * Extract class names from CSS file
 * @param {string} cssPath - Path to CSS file
 * @returns {Promise<Set<string>>} - Set of class names defined in CSS
 */
async function extractCssClasses(cssPath) {
  const content = await readFile(cssPath, "utf-8");
  const classes = new Set();

  // Match class selectors: .classname, .class-name, .class_name
  // Handles compound selectors by extracting each class
  const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;

  let match;
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }

  return classes;
}

/**
 * Extract all class names from HTML content
 * @param {string} html - HTML content
 * @returns {Set<string>} - Set of unique class names
 */
function extractHtmlClasses(html) {
  const classes = new Set();

  // Match class="..." or class='...'
  const classAttrRegex = /class\s*=\s*["']([^"']*)["']/gi;

  let match;
  while ((match = classAttrRegex.exec(html)) !== null) {
    const classValue = match[1];
    // Split by whitespace and filter out empty strings
    const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
    for (const name of classNames) {
      classes.add(name);
    }
  }

  return classes;
}

/**
 * Extract class names from JavaScript/TypeScript content
 * Handles common patterns like className, clsx, classNames, classList
 * @param {string} content - JS/TS file content
 * @returns {Set<string>} - Set of unique class names
 */
function extractJsClasses(content) {
  const classes = new Set();

  // Pattern 1: className="..." or className='...'
  const classNameStringRegex = /className\s*=\s*["']([^"']*)["']/g;
  let match;
  while ((match = classNameStringRegex.exec(content)) !== null) {
    const classValue = match[1];
    const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
    for (const name of classNames) {
      classes.add(name);
    }
  }

  // Pattern 2: className={`...`} or className={"..."} - template literals and expressions
  const classNameTemplateRegex = /className\s*=\s*\{[`"']([^`"']*)[`"']\}/g;
  while ((match = classNameTemplateRegex.exec(content)) !== null) {
    const classValue = match[1];
    // Extract static parts from template literals
    const staticParts = classValue.split(/\$\{[^}]*\}/);
    for (const part of staticParts) {
      const classNames = part.split(/\s+/).filter((c) => c.length > 0 && !c.includes(" "));
      for (const name of classNames) {
        if (/^[a-zA-Z_-][a-zA-Z0-9_-]*$/.test(name)) {
          classes.add(name);
        }
      }
    }
  }

  // Pattern 3: clsx('class1', 'class2') or clsx("class1", "class2")
  const clsxRegex = /clsx\s*\(([^)]+)\)/g;
  while ((match = clsxRegex.exec(content)) !== null) {
    const args = match[1];
    // Extract string arguments
    const stringRegex = /["']([^"']*)["']/g;
    let stringMatch;
    while ((stringMatch = stringRegex.exec(args)) !== null) {
      const classValue = stringMatch[1];
      const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
      for (const name of classNames) {
        classes.add(name);
      }
    }
  }

  // Pattern 4: classNames('class1', 'class2') - classnames library
  const classNamesRegex = /classNames\s*\(([^)]+)\)/g;
  while ((match = classNamesRegex.exec(content)) !== null) {
    const args = match[1];
    const stringRegex = /["']([^"']*)["']/g;
    let stringMatch;
    while ((stringMatch = stringRegex.exec(args)) !== null) {
      const classValue = stringMatch[1];
      const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
      for (const name of classNames) {
        classes.add(name);
      }
    }
  }

  // Pattern 5: classList.add('class-name') or classList.remove('class-name')
  const classListRegex = /classList\.(add|remove|toggle)\s*\(\s*["']([^"']*)["']/g;
  while ((match = classListRegex.exec(content)) !== null) {
    const classValue = match[2];
    const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
    for (const name of classNames) {
      classes.add(name);
    }
  }

  // Pattern 6: element.className = '...'
  const classNameAssignmentRegex = /\.className\s*=\s*["']([^"']*)["']/g;
  while ((match = classNameAssignmentRegex.exec(content)) !== null) {
    const classValue = match[1];
    const classNames = classValue.split(/\s+/).filter((c) => c.length > 0);
    for (const name of classNames) {
      classes.add(name);
    }
  }

  // Pattern 7: 'class-name' as standalone string (potential class name)
  // Only match strings that look like CSS class names (kebab-case or camelCase)
  const stringLiteralRegex = /["']([a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)+)["']/g;
  while ((match = stringLiteralRegex.exec(content)) !== null) {
    const potentialClass = match[1];
    // Only add if it looks like a CSS class (contains hyphen and doesn't look like a URL/path)
    if (
      potentialClass.includes("-") &&
      !potentialClass.includes("/") &&
      !potentialClass.includes(".")
    ) {
      classes.add(potentialClass);
    }
  }

  return classes;
}
async function main() {
  try {
    // Check if build directory exists
    try {
      await stat(BUILD_DIR);
    } catch {
      console.error(`Error: Build directory not found: ${BUILD_DIR}`);
      console.error("Please run the build first (e.g., npm run build)");
      process.exit(1);
    }

    // Check if CSS file exists
    try {
      await stat(CSS_FILE);
    } catch {
      console.error(`Error: CSS file not found: ${CSS_FILE}`);
      process.exit(1);
    }

    console.log("Analyzing CSS classes...\n");

    // Extract CSS classes
    const cssClasses = await extractCssClasses(CSS_FILE);
    console.log(`Found ${cssClasses.size} unique classes in ${CSS_FILE}`);

    // Find HTML files
    const htmlFiles = await findHtmlFiles(BUILD_DIR);
    console.log(`Found ${htmlFiles.length} HTML files in ${BUILD_DIR}`);

    // Find JS/TS files
    const jsFiles = await findFilesByExtension(SRC_DIR, [".js", ".ts", ".jsx", ".tsx", ".mjs"]);
    console.log(`Found ${jsFiles.length} JS/TS files in ${SRC_DIR}`);

    // Extract all HTML classes
    const htmlClasses = new Set();
    const classLocations = new Map(); // Track where each class is used

    for (const file of htmlFiles) {
      const content = await readFile(file, "utf-8");
      const fileClasses = extractHtmlClasses(content);

      for (const className of fileClasses) {
        htmlClasses.add(className);
        if (!classLocations.has(className)) {
          classLocations.set(className, { html: [], js: [] });
        }
        const relativePath = file.replace(BUILD_DIR, "").replace(/^[/\\]/, "");
        if (!classLocations.get(className).html.includes(relativePath)) {
          classLocations.get(className).html.push(relativePath);
        }
      }
    }

    // Extract all JS classes
    const jsClasses = new Set();
    const jsClassLocations = new Map();

    for (const file of jsFiles) {
      const content = await readFile(file, "utf-8");
      const fileClasses = extractJsClasses(content);

      for (const className of fileClasses) {
        jsClasses.add(className);
        if (!jsClassLocations.has(className)) {
          jsClassLocations.set(className, []);
        }
        const relativePath = file.replace(SRC_DIR, "src").replace(/^[/\\]/, "");
        if (!jsClassLocations.get(className).includes(relativePath)) {
          jsClassLocations.get(className).push(relativePath);
        }
      }
    }

    // Combine all used classes
    const allUsedClasses = new Set([...htmlClasses, ...jsClasses]);

    console.log(`Found ${htmlClasses.size} unique classes in HTML`);
    console.log(`Found ${jsClasses.size} unique classes in JS/TS`);
    console.log(`Found ${allUsedClasses.size} total unique classes used\n`);

    // Merge locations for reporting
    for (const [className, jsFiles] of jsClassLocations) {
      if (!classLocations.has(className)) {
        classLocations.set(className, { html: [], js: [] });
      }
      classLocations.get(className).js.push(...jsFiles);
    }

    // Find classes used in HTML or JS but not defined in CSS
    const missingInCss = [];
    for (const className of allUsedClasses) {
      if (!cssClasses.has(className)) {
        missingInCss.push(className);
      }
    }

    // Find classes defined in CSS but not used anywhere
    const unusedClasses = [];
    for (const className of cssClasses) {
      if (!allUsedClasses.has(className)) {
        unusedClasses.push(className);
      }
    }

    // Report results
    console.log("=".repeat(60));
    console.log("CSS CLASS CHECK RESULTS");
    console.log("=".repeat(60));

    if (missingInCss.length === 0 && unusedClasses.length === 0) {
      console.log("\nAll classes are properly matched! No issues found.");
    }

    if (missingInCss.length > 0) {
      console.log(`\n⚠️  Classes USED but NOT DEFINED in custom.css (${missingInCss.length}):`);
      console.log("-".repeat(60));
      missingInCss.sort();
      for (const className of missingInCss) {
        const locations = classLocations.get(className) || { html: [], js: [] };
        const htmlLocs = locations.html.slice(0, 2);
        const jsLocs = locations.js.slice(0, 2);
        const parts = [];
        if (htmlLocs.length > 0) parts.push(`html: ${htmlLocs.join(", ")}`);
        if (jsLocs.length > 0) parts.push(`js: ${jsLocs.join(", ")}`);
        const locationStr = parts.length > 0 ? ` (${parts.join("; ")})` : "";
        console.log(`  .${className}${locationStr}`);
      }
    }

    if (unusedClasses.length > 0) {
      console.log(`\nℹ️  Classes DEFINED in CSS but NOT USED (${unusedClasses.length}):`);
      console.log("-".repeat(60));
      unusedClasses.sort();
      for (const className of unusedClasses) {
        console.log(`  .${className}`);
      }
      console.log("\nNote: Some classes may be used dynamically at runtime or");
      console.log("      may be from third-party libraries (e.g., Infima, Tailwind).");
    }

    console.log("\n" + "=".repeat(60));
    console.log("Summary:");
    console.log(`  - CSS classes defined:      ${cssClasses.size}`);
    console.log(`  - HTML classes used:          ${htmlClasses.size}`);
    console.log(`  - JS/TS classes used:         ${jsClasses.size}`);
    console.log(`  - Total classes used:         ${allUsedClasses.size}`);
    console.log(`  - Missing in CSS:             ${missingInCss.length}`);
    console.log(`  - Potentially unused:         ${unusedClasses.length}`);
    console.log("=".repeat(60));

    // Exit with error code if there are missing classes
    if (missingInCss.length > 0) {
      process.exit(1);
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
