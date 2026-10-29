import React from "react";
import OriginalMDXComponents from "@theme-original/MDXComponents";
import { OptimizedBanner } from "../../components/OptimizedImage";

type ImgProps = Readonly<React.ImgHTMLAttributes<HTMLImageElement>>;

/**
 * Custom MDX `img` mapping that automatically upgrades `.kb-banner` PNG images
 * to `<OptimizedBanner>` (`<picture>` with WebP + 1x/2x responsive `srcset`),
 * while leaving any non-banner images untouched.
 */
function MDXImg(props: ImgProps): React.ReactElement {
  const { src, alt = "", width, height, className, loading } = props;

  if (
    typeof src === "string" &&
    src.endsWith(".png") &&
    typeof className === "string" &&
    className.split(/\s+/).includes("kb-banner")
  ) {
    return (
      <OptimizedBanner
        src={src}
        alt={alt}
        width={typeof width === "number" ? width : Number(width) || 960}
        height={typeof height === "number" ? height : Number(height) || 384}
        className={className}
        loading={loading === "eager" ? "eager" : "lazy"}
      />
    );
  }

  return <img {...props} alt={alt} />;
}

export default {
  ...OriginalMDXComponents,
  img: MDXImg,
};
