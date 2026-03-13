import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocRoot/Layout/Main';

import styles from './styles.module.css';

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();

  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}>
      {sidebar && (
        <nav className={styles.mobileSidebarNav} aria-label="Docs navigation">
          <div className={styles.mobileSidebarNavHeader}>
            <Translate
              id="theme.docs.mobileSubnav.title"
              description="Title for mobile docs sub navigation">
              On This Section
            </Translate>
          </div>
          <ul className="menu__list">
            <DocSidebarItems
              items={sidebar.items}
              activePath={pathname}
              onItemClick={() => undefined}
              level={1}
            />
          </ul>
        </nav>
      )}
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}>
        {children}
      </div>
    </main>
  );
}
