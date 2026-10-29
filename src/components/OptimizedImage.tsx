import React from "react";

/**
 * Props for the OptimizedImage component.
 */
export interface OptimizedImageProps {
  /** Base PNG path under `/img/` (e.g. `/img/hero-dojo-wall.png`). */
  src: string;
  /** Accessible alternative text for the image. */
  alt: string;
  /** Intrinsic display width in CSS pixels. */
  width: number;
  /** Intrinsic display height in CSS pixels. */
  height: number;
  /** Optional CSS class name applied to the fallback `<img>` element. */
  className?: string;
  /** Browser loading strategy (`"lazy"` by default, `"eager"` for LCP images). */
  loading?: "eager" | "lazy";
  /** Optional WebP `srcset` string for responsive density descriptors. */
  srcSetWebP?: string;
  /** Optional PNG `srcset` string for responsive density descriptors. */
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
 * Helper to generate a `srcset` string for responsive images produced by
 * `scripts/convert-images.mjs`, where `-2x` is the half-size (1x density)
 * variant and the unsuffixed file is the full-size (2x retina) variant.
 *
 * @param basePath - Path to the base `.png` image (e.g. `/img/banner.png`)
 * @param extension - Target format (`"webp"` or `"png"`)
 * @returns Formatted `srcset` string with `1x` and `2x` density descriptors
 */
export function generateSrcSet(basePath: string, extension: "webp" | "png" = "png"): string {
  const base = basePath.replace(/\.png$/, "");
  const ext = extension === "webp" ? ".webp" : ".png";

  // scripts/convert-images.mjs outputs `-2x` at 50% dimensions (1x display density)
  // and the base filename at full dimensions (2x retina density).
  const src1x = `${base}-2x${ext}`;
  const src2x = `${base}${ext}`;

  return `${src1x} 1x, ${src2x} 2x`;
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
  const srcSetWebP = generateSrcSet(src, "webp");
  const srcSetPng = generateSrcSet(src, "png");

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
  const srcSetWebP = generateSrcSet(src, "webp");
  const srcSetPng = generateSrcSet(src, "png");

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
