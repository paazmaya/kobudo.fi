/**
 * Swizzle of @theme/NavbarItem/DocNavbarItem
 *
 * The default implementation marks an item as active when
 * `activeDoc.sidebar === doc.sidebar`. Because all docs share one sidebar
 * (docsSidebar), this makes EVERY navbar item active at the same time, giving
 * all of them the active class and aria-current="page" simultaneously.
 *
 * This override replaces sidebar-based detection with path-prefix detection:
 *   - exact match (for leaf pages like /tutkimus)
 *   - prefix match (for section indexes like /historia/ → /historia/taira-shinken)
 *
 * Result: exactly one item is "active" at any URL.
 */
import React from "react";
import { useLocation } from "@docusaurus/router";
import { useActiveDocContext, useLayoutDoc } from "@docusaurus/plugin-content-docs/client";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";

type Props = {
  docId: string;
  label?: string;
  docsPluginId?: string;
  [key: string]: unknown;
};

export default function DocNavbarItem({
  docId,
  label: staticLabel,
  docsPluginId,
  ...props
}: Props): React.ReactElement | null {
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const doc = useLayoutDoc(docId, docsPluginId);
  const { pathname } = useLocation();

  if (doc === null) {
    return null;
  }

  const pageActive = activeDoc?.path === doc.path;

  // Path exact match
  const prefixActive = pathname === doc.path;

  if (doc.unlisted && !pageActive) {
    return null;
  }

  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() => prefixActive}
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
