import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  // Optional: provide WebP srcset for responsive images
  srcSetWebP?: string;
  // Optional: provide PNG srcset for responsive images
  srcSetPng?: string;
}

/**
 * OptimizedImage component that serves WebP with PNG fallback
 * and supports responsive srcset for density descriptors.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  srcSetWebP,
  srcSetPng,
}: OptimizedImageProps): React.ReactElement {
  // Derive WebP path from PNG path (same directory, .webp extension)
  const webpSrc = src.replace(/\.png$/, ".webp");

  return (
    <picture>
      {/* WebP source with optional srcset */}
      <source type="image/webp" srcSet={srcSetWebP || webpSrc} sizes={`${width}px`} />
      {/* PNG fallback with optional srcset */}
      <source type="image/png" srcSet={srcSetPng || src} sizes={`${width}px`} />
      {/* Fallback img element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        decoding="async"
      />
    </picture>
  );
}

/**
 * Helper to generate srcset string for responsive images.
 * Generates 1x, 2x, and optionally 3x density descriptors.
 */
export function generateSrcSet(
  basePath: string,
  width: number,
  extension: "webp" | "png" = "png",
): string {
  // Remove extension and add the requested one
  const base = basePath.replace(/\.png$/, "");
  const ext = extension === "webp" ? ".webp" : ".png";

  // Generate paths for different sizes: original, 2x (½ size), 3x (⅓ size)
  // For WebP, we assume files are named: filename.webp, filename-2x.webp, etc.
  const src1x = `${base}${ext}`;
  const src2x = `${base}-2x${ext}`;
  const src3x = `${base}-3x${ext}`;

  return `${src1x} 1x, ${src2x} 2x, ${src3x} 3x`;
}

/**
 * Simplified optimized image for banners and hero images
 * with predefined responsive sizes.
 */
export function OptimizedBanner({
  src,
  alt,
  width = 960,
  height = 384,
  className = "kb-banner",
  loading = "lazy",
}: Omit<OptimizedImageProps, "srcSetWebP" | "srcSetPng">): React.ReactElement {
  // Banner images get 2x density (½ original size) for responsive loading
  const srcSetWebP = `${src.replace(/\.png$/, ".webp")} 1x, ${src.replace(
    /\.png$/,
    "-2x.webp",
  )} 2x`;
  const srcSetPng = `${src} 1x, ${src.replace(/\.png$/, "-2x.png")} 2x`;

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      srcSetWebP={srcSetWebP}
      srcSetPng={srcSetPng}
    />
  );
}

/**
 * Optimized card image with fixed dimensions and lazy loading.
 */
export function OptimizedCardImage({
  src,
  alt,
  width = 384,
  height = 256,
  className = "kb-card__img",
}: Omit<OptimizedImageProps, "loading" | "srcSetWebP" | "srcSetPng">): React.ReactElement {
  // Card images use 1x density (original size is sufficient for cards)
  // but we provide WebP for better compression
  const webpSrc = src.replace(/\.png$/, ".webp");

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <source type="image/png" srcSet={src} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={className}
        decoding="async"
      />
    </picture>
  );
}

/**
 * Optimized hero image with eager loading for LCP optimization.
 */
export function OptimizedHeroImage({
  src,
  alt,
  width = 1184,
  height = 448,
  className = "kb-hero__image",
}: Omit<OptimizedImageProps, "loading" | "srcSetWebP" | "srcSetPng">): React.ReactElement {
  // Hero images need 2x density for retina displays
  const srcSetWebP = `${src.replace(/\.png$/, ".webp")} 1x, ${src.replace(
    /\.png$/,
    "-2x.webp",
  )} 2x`;
  const srcSetPng = `${src} 1x, ${src.replace(/\.png$/, "-2x.png")} 2x`;

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
      srcSetWebP={srcSetWebP}
      srcSetPng={srcSetPng}
    />
  );
}
