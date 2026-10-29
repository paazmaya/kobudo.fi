import React from "react";
import { OptimizedBanner } from "../components/OptimizedImage";

/**
 * Props for the OptimizedDocBanner MDX component.
 */
export interface OptimizedBannerProps {
  /** Path to the source `.png` banner image under `/img/`. */
  src: string;
  /** Accessible description of the banner illustration. */
  alt: string;
  /** Optional display width in CSS pixels (defaults to 960). */
  width?: number;
  /** Optional display height in CSS pixels (defaults to 384). */
  height?: number;
}

/**
 * OptimizedBanner component for use in MDX documentation pages.
 * Automatically uses WebP format with PNG fallback and responsive srcset.
 *
 * Usage in MDX:
 * ```mdx
 * import { OptimizedDocBanner } from "@site/src/components/OptimizedDocBanner";
 *
 * <OptimizedDocBanner src="/img/ryukyu-procession.png" alt="Description of image" />
 * ```
 */
export function OptimizedDocBanner({
  src,
  alt,
  width = 960,
  height = 384,
}: OptimizedBannerProps): React.ReactElement {
  return <OptimizedBanner src={src} alt={alt} width={width} height={height} />;
}

export default OptimizedDocBanner;
