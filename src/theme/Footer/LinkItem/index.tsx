import React from "react";
import OriginalLinkItem from "@theme-original/Footer/LinkItem";
import type { FooterLinkItem } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { FI_TO_EN } from "../../../utils/localePaths";

type Props = {
  /** Footer link configuration item from `docusaurus.config.ts`. */
  readonly item: FooterLinkItem;
};

/**
 * Swizzled Footer/LinkItem wrapper that rewrites internal Finnish slugs
 * (e.g. `/historia/`) to their English equivalents (e.g. `/history/`) when
 * rendering in the `en` locale.
 */
export default function FooterLinkItem({ item }: Props): React.ReactElement {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  if (currentLocale === "en" && item.to && FI_TO_EN[item.to]) {
    return <OriginalLinkItem item={{ ...item, to: FI_TO_EN[item.to] }} />;
  }
  return <OriginalLinkItem item={item} />;
}
