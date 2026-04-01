/**
 * Script to convert PNG images to WebP format with multiple sizes
 * for responsive image loading.
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const IMG_DIR = "./static/img";

// Images to convert (from homepage and commonly used images)
const IMAGES_TO_CONVERT = [
  // Hero image
  "hero-dojo-wall.png",
  // Card images (homepage)
  "card-ryukyu-map.png",
  "card-lineage-scroll.png",
  "card-weapons-display.png",
  "card-kata-scroll.png",
  "card-research-books.png",
  "card-about-journal.png",
  // Banner images (commonly used in docs)
  "ryukyu-procession.png",
  "banner-okinawa-coast.png",
  "banner-eight-weapons.png",
  "banner-kata-scroll.png",
  "banner-lineage-scroll.png",
  "banner-kata-lineage-scroll.png",
  "banner-taira-students.png",
  "banner-yabiku-moden.png",
  "banner-research-library.png",
  "banner-about-desk.png",
  "banner-404-not-finding-papers.png",
  // Weapon images
  "bo-staff-close.png",
  "sai-pair-overhead.png",
  "nunchaku-coiled.png",
  "kama-pair-crossed.png",
  "tonfa-pair-cross.png",
  "tekko-iron-knuckle.png",
  "tinbe-rochin-pair.png",
  "surujin-rope-spiral.png",
  "matayoshi-weapons.png",
  "yamane-bojutsu.png",
  // Kata images
  "bo-kata-strike.png",
  "sai-kata-guard.png",
  "kata-transmission-lesson.png",
  // Portrait/figure images
  "taira-shinken-portrait.png",
  "taira-line-scroll.png",
  "other-weapons-panel.png",
];

async function convertImage(filename) {
  const inputPath = path.join(IMG_DIR, filename);
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

    // Generate 1x (original) WebP
    const webpPath = path.join(IMG_DIR, `${baseName}.webp`);
    await image.webp({ quality: 75 }).toFile(webpPath);
    console.log(`Created ${baseName}.webp (${width}x${height})`);

    // Generate 2x (50% size) WebP and PNG for responsive images
    const halfWidth = Math.round(width / 2);
    const halfHeight = Math.round(height / 2);

    const webp2xPath = path.join(IMG_DIR, `${baseName}-2x.webp`);
    await sharp(inputPath).resize(halfWidth, halfHeight).webp({ quality: 75 }).toFile(webp2xPath);
    console.log(`Created ${baseName}-2x.webp (${halfWidth}x${halfHeight})`);

    // Also create 2x PNG for fallback
    /*
    const png2xPath = path.join(IMG_DIR, `${baseName}-2x.png`);
    await sharp(inputPath)
      .resize(halfWidth, halfHeight)
      .png({ quality: 9 })
      .toFile(png2xPath);
    console.log(`Created ${baseName}-2x.png (${halfWidth}x${halfHeight})`);
    */
  } catch (error) {
    console.error(`Error converting ${filename}:`, error.message);
  }
}

async function main() {
  console.log("Converting images to WebP format...\n");

  for (const image of IMAGES_TO_CONVERT) {
    await convertImage(image);
  }

  console.log("\nImage conversion complete!");
}

main().catch(console.error);
