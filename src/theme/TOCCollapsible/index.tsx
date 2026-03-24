import React, { type ReactElement } from "react";
import { translate } from "@docusaurus/Translate";
import TOCCollapsible from "@theme-original/TOCCollapsible";
import type { Props } from "@theme/TOCCollapsible";

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
