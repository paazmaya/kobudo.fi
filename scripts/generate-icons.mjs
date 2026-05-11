/**
 * Script to generate all icon and favicon variants from a single square PNG source.
 *
 * Takes one high-resolution square PNG (recommended: 1024x1024 or larger) and produces:
 * - static/img/favicon-16x16.png
 * - static/img/favicon-32x32.png
 * - static/img/apple-touch-icon.png  (180x180)
 * - static/img/android-chrome-192x192.png
 * - static/img/android-chrome-512x512.png
 * - static/img/mstile-150x150.png
 * - static/img/icon-mask.png         (512x512, for PWA maskable)
 * - static/favicon.ico               (multi-size: 16, 32, 48)
 * - static/img/navbar-logo.png       (optional, 32px tall, preserves aspect ratio)
 *
 * Usage:
 *   node scripts/generate-icons.mjs <source.png>
 *   node scripts/generate-icons.mjs <source.png> --navbar-logo
 *
 * Remember to install sharp, tested with version 0.34.5:
 *   npm install --no-save sharp
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const OUTPUT_IMG_DIR = "./static/img";
const OUTPUT_STATIC_DIR = "./static";

// PNG compression settings (0=none, 9=max; effort 1-10)
const PNG_COMPRESSION_LEVEL = 9;
const PNG_EFFORT = 10;

// Icon sizes to generate
const ICON_VARIANTS = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "icon-mask.png", size: 512 },
  { name: "android-chrome-512x512.png", size: 512 },
  { name: "mstile-150x150.png", size: 150 },
];

// Sizes to include in the multi-resolution favicon.ico
const ICO_SIZES = [16, 32];

/**
 * Resize and compress a PNG to a square at the given pixel size.
 * @param {sharp.Sharp} image - Sharp instance of the source image
 * @param {string} inputPath - Path to the source PNG (for re-creating sharp instances)
 * @param {number} size - Target width and height in pixels
 * @param {string} outputPath - Destination file path
 */
async function resizePng(inputPath, size, outputPath) {
  await sharp(inputPath)
    .resize(size, size, { fit: "cover", position: "center" })
    .png({ compressionLevel: PNG_COMPRESSION_LEVEL, effort: PNG_EFFORT, palette: true, colors: 32 })
    .toFile(outputPath);
}

/**
 * Build a minimal .ico file containing multiple PNG sizes.
 * The ICO format embeds raw PNG data for each size (modern browsers support this).
 * @param {string} inputPath - Source PNG path
 * @param {number[]} sizes - List of sizes to embed
 * @param {string} outputPath - Destination .ico path
 */
async function buildIco(inputPath, sizes, outputPath) {
  // Generate raw PNG buffers for each size
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(inputPath)
        .resize(size, size, { fit: "cover", position: "center" })
        .png({ compressionLevel: PNG_COMPRESSION_LEVEL, effort: PNG_EFFORT, palette: true, colors: 32 })
        .toBuffer(),
    ),
  );

  // ICO header: ICONDIR
  // Reserved(2) + Type(2, =1 for ICO) + Count(2)
  const count = sizes.length;
  const headerSize = 6;
  const dirEntrySize = 16; // per image
  const dirSize = headerSize + dirEntrySize * count;

  // Calculate offsets
  let offset = dirSize;
  const offsets = pngBuffers.map((buf) => {
    const o = offset;
    offset += buf.length;
    return o;
  });

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: ICO
  header.writeUInt16LE(count, 4); // Image count

  const dirEntries = pngBuffers.map((buf, i) => {
    const entry = Buffer.alloc(dirEntrySize);
    const s = sizes[i];
    entry.writeUInt8(s >= 256 ? 0 : s, 0); // Width (0 = 256)
    entry.writeUInt8(s >= 256 ? 0 : s, 1); // Height (0 = 256)
    entry.writeUInt8(0, 2); // Color count (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buf.length, 8); // Size of image data
    entry.writeUInt32LE(offsets[i], 12); // Offset of image data
    return entry;
  });

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers]);
  fs.writeFileSync(outputPath, icoBuffer);
}

async function main() {
  const args = process.argv.slice(2);
  const sourcePath = args.find((a) => !a.startsWith("--"));
  const generateNavbarLogo = args.includes("--navbar-logo");

  if (!sourcePath) {
    console.error(
      "Usage: node scripts/generate-icons.mjs <source.png> [--navbar-logo]",
    );
    process.exit(1);
  }

  if (!fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    process.exit(1);
  }

  // Validate source is square
  const meta = await sharp(sourcePath).metadata();
  if (meta.width !== meta.height) {
    console.warn(
      `Warning: source image is not square (${meta.width}x${meta.height}). ` +
        `Output icons will be cropped to a square.`,
    );
  } else {
    console.log(`Source: ${sourcePath} (${meta.width}x${meta.height})\n`);
  }

  // Ensure output directories exist
  if (!fs.existsSync(OUTPUT_IMG_DIR)) {
    fs.mkdirSync(OUTPUT_IMG_DIR, { recursive: true });
  }

  // Generate all PNG icon variants
  for (const { name, size } of ICON_VARIANTS) {
    const outputPath = path.join(OUTPUT_IMG_DIR, name);
    await resizePng(sourcePath, size, outputPath);
    console.log(`Created ${name} (${size}x${size})`);
  }

  // Generate favicon.ico
  const icoPath = path.join(OUTPUT_STATIC_DIR, "favicon.ico");
  await buildIco(sourcePath, ICO_SIZES, icoPath);
  console.log(
    `Created favicon.ico (${ICO_SIZES.map((s) => `${s}x${s}`).join(", ")})`,
  );

  // Optionally generate navbar-logo.png (32px tall, aspect-ratio preserved)
  if (generateNavbarLogo) {
    const navbarPath = path.join(OUTPUT_IMG_DIR, "navbar-logo.png");
    await sharp(sourcePath)
      .resize(null, 32) // height=32, width auto
      .png({ compressionLevel: PNG_COMPRESSION_LEVEL, effort: PNG_EFFORT, palette: true, colors: 32 })
      .toFile(navbarPath);
    console.log(`Created navbar-logo.png (height=32, aspect-ratio preserved)`);
  }

  console.log("\nIcon generation complete!");
}

main().catch(console.error);
