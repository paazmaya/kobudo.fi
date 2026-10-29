import React, { type ReactElement } from "react";
import { translate } from "@docusaurus/Translate";
import TOCCollapsible from "@theme-original/TOCCollapsible";
import type { Props } from "@theme/TOCCollapsible";

/**
 * Swizzled TOCCollapsible wrapper that adds a localized `<nav aria-label="...">`
 * landmark around the mobile collapsible table of contents for WCAG accessibility.
 */
export default function TOCCollapsibleWrapper(props: Props): ReactElement {
  return (
    <nav
      aria-label={translate({
        id: "theme.TOCCollapsible.navAriaLabel",
        message: "Secondary",
        description: "The ARIA label for the table of contents secondary navigation",
      })}
    >
      <TOCCollapsible {...props} />
    </nav>
  );
}
