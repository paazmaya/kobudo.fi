import React from "react";
import { OptimizedBanner } from "../components/OptimizedImage";

interface OptimizedBannerProps {
  src: string;
  alt: string;
  width?: number;
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
