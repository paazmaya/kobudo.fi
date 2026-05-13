/**
 * Script to convert PNG images to WebP format with multiple sizes
 * for responsive image loading, and generate optimized social media JPEGs.
 *
 * Reads image list from images.json and converts PNG source files from
 * generated-images directory. Creates:
 * - Compressed PNG (1x and 2x) in static/img/
 * - WebP variants (1x and 2x) in static/img/
 * - Social media JPEGs (1200x630) in static/img/social/
 *
 * Social media images use aspect ratio fill (cover) to match 1200x630 from 1376x768 source.
 *
 * Remember to install sharp, tested with version 0.34.5
 * npm install --no-save sharp
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SOURCE_IMG_DIR = "./generated-images";
const OUTPUT_IMG_DIR = "./static/img";
const OUTPUT_SOCIAL_DIR = "./static/img/social";
const IMAGES_JSON_PATH = "./images.json";

// Categories to skip (icons are handled separately, social media images are JPEGs)
const SKIP_CATEGORIES = ["faviconsAndPWA", "uiAndBranding"];

// PNG compression settings (0=none, 9=max; effort 1-10)
const PNG_COMPRESSION_LEVEL = 9;
const PNG_EFFORT = 10;

// Social media image dimensions
const SOCIAL_MEDIA_WIDTH = 1200;
const SOCIAL_MEDIA_HEIGHT = 630;
const SOCIAL_MEDIA_QUALITY = 70;

/**
 * Extract PNG filenames from images.json, excluding specified categories
 * @returns {string[]} Array of PNG filenames to convert
 */
function loadImagesToConvert() {
  try {
    const imagesData = JSON.parse(fs.readFileSync(IMAGES_JSON_PATH, "utf-8"));
    const imagesToConvert = [];

    Object.entries(imagesData.categories).forEach(([categoryName, categoryData]) => {
      // Skip categories we don't need to convert
      if (SKIP_CATEGORIES.includes(categoryName)) {
        return;
      }

      categoryData.images.forEach((imageEntry) => {
        // Extract PNG files with baseName property
        if (imageEntry.baseName) {
          const pngFile = `${imageEntry.baseName}.png`;
          imagesToConvert.push(pngFile);
        }
        // Handle single-name entries (like navbar-logo.png)
        else if (imageEntry.name && imageEntry.name.endsWith(".png")) {
          imagesToConvert.push(imageEntry.name);
        }
      });
    });

    return imagesToConvert;
  } catch (error) {
    console.error(`Error loading images.json: ${error.message}`);
    process.exit(1);
  }
}

const IMAGES_TO_CONVERT = loadImagesToConvert();

/**
 * Ensure output directories exist
 */
function ensureOutputDirectories() {
  if (!fs.existsSync(OUTPUT_IMG_DIR)) {
    fs.mkdirSync(OUTPUT_IMG_DIR, { recursive: true });
  }
  if (!fs.existsSync(OUTPUT_SOCIAL_DIR)) {
    fs.mkdirSync(OUTPUT_SOCIAL_DIR, { recursive: true });
  }
}

async function convertImage(filename) {
  const inputPath = path.join(SOURCE_IMG_DIR, filename);
  const baseName = filename.replace(".png", "");

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${filename} - file not found`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const width = metadata.width;
    const height = metadata.height;

    // Generate 1x (original) compressed PNG
    const pngPath = path.join(OUTPUT_IMG_DIR, `${baseName}.png`);
    await image
      .png({
        compressionLevel: PNG_COMPRESSION_LEVEL,
        effort: PNG_EFFORT,
        palette: true,
        colors: 64,
      })
      .toFile(pngPath);
    console.log(`Created ${baseName}.png (${width}x${height})`);

    // Generate 1x (original) WebP
    const webpPath = path.join(OUTPUT_IMG_DIR, `${baseName}.webp`);
    await image.webp({ quality: 72 }).toFile(webpPath);
    console.log(`Created ${baseName}.webp (${width}x${height})`);

    // Generate 2x (50% size) WebP and PNG for responsive images
    const halfWidth = Math.round(width / 2);
    const halfHeight = Math.round(height / 2);

    const png2xPath = path.join(OUTPUT_IMG_DIR, `${baseName}-2x.png`);
    await sharp(inputPath)
      .resize(halfWidth, halfHeight)
      .png({
        compressionLevel: PNG_COMPRESSION_LEVEL,
        effort: PNG_EFFORT,
        palette: true,
        colors: 64,
      })
      .toFile(png2xPath);
    console.log(`Created ${baseName}-2x.png (${halfWidth}x${halfHeight})`);

    const webp2xPath = path.join(OUTPUT_IMG_DIR, `${baseName}-2x.webp`);
    await sharp(inputPath).resize(halfWidth, halfHeight).webp({ quality: 72 }).toFile(webp2xPath);
    console.log(`Created ${baseName}-2x.webp (${halfWidth}x${halfHeight})`);

    // Generate social media JPEG (1200x630) with aspect ratio fill (cover)
    const socialPath = path.join(OUTPUT_SOCIAL_DIR, `${baseName}-1200x630.jpg`);
    await sharp(inputPath)
      .resize(SOCIAL_MEDIA_WIDTH, SOCIAL_MEDIA_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({ quality: SOCIAL_MEDIA_QUALITY, progressive: true })
      .toFile(socialPath);
    console.log(
      `Created ${baseName}-1200x630.jpg (${SOCIAL_MEDIA_WIDTH}x${SOCIAL_MEDIA_HEIGHT}, cover-filled)`,
    );
  } catch (error) {
    console.error(`Error converting ${filename}:`, error.message);
  }
}

async function main() {
  console.log("Converting PNG images to compressed PNG, WebP, and social media JPEG formats...\n");
  console.log(`Source directory: ${SOURCE_IMG_DIR}`);
  console.log(`Output directory: ${OUTPUT_IMG_DIR}`);
  console.log(`Social media directory: ${OUTPUT_SOCIAL_DIR}`);
  console.log(`Loading image list from ${IMAGES_JSON_PATH}`);
  console.log(`Converting ${IMAGES_TO_CONVERT.length} images\n`);

  ensureOutputDirectories();

  for (const image of IMAGES_TO_CONVERT) {
    await convertImage(image);
  }

  console.log("\nImage conversion complete!");
}

main().catch(console.error);
