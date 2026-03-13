import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import {
  mergeSearchStrings,
  useHistorySelector,
} from "@docusaurus/theme-common";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import IconLanguage from "@theme/Icon/Language";
import styles from "./styles.module.css";
import { FI_TO_EN, EN_TO_FI } from "../../../utils/localePaths";

const SCHEME = "pathname://";

/**
 * Translate a `pathname://` URL produced by useAlternatePageUtils so that
 * Finnish slugs become English slugs (and vice-versa) in the locale dropdown.
 *
 * useAlternatePageUtils does a pure prefix swap:
 *   fi /historia/      → en pathname:///en/historia/   (wrong slug)
 *   en /en/history/    → fi pathname:///history/       (wrong slug)
 */
function translateAlternateUrl(
  url: string,
  targetLocale: string,
  defaultLocale: string,
): string {
  if (!url.startsWith(SCHEME)) return url;

  const withoutScheme = url.slice(SCHEME.length); // e.g. /en/historia/?q=1#h
  const qIdx = withoutScheme.indexOf("?");
  const hIdx = withoutScheme.indexOf("#");
  const pathEnd = Math.min(
    qIdx === -1 ? Infinity : qIdx,
    hIdx === -1 ? Infinity : hIdx,
  );
  const rawPath =
    pathEnd === Infinity ? withoutScheme : withoutScheme.slice(0, pathEnd);
  const suffix = pathEnd === Infinity ? "" : withoutScheme.slice(pathEnd);

  if (targetLocale !== defaultLocale) {
    // e.g. rawPath = /en/historia/  →  translate the fi portion
    const localePrefix = `/${targetLocale}`;
    if (rawPath.startsWith(localePrefix)) {
      const fiPath = rawPath.slice(localePrefix.length) || "/";
      const enPath = FI_TO_EN[fiPath];
      if (enPath) return `${SCHEME}${localePrefix}${enPath}${suffix}`;
    }
  } else {
    // e.g. rawPath = /history/  →  translate to fi slug
    const fiPath = EN_TO_FI[rawPath];
    if (fiPath) return `${SCHEME}${fiPath}${suffix}`;
  }

  return url; // unmapped pages are left as-is (redirects will catch them)
}

function useLocaleDropdownUtils() {
  const {
    siteConfig,
    i18n: { localeConfigs, defaultLocale },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const getLocaleConfig = (locale: string) => {
    const localeConfig = localeConfigs[locale];
    if (!localeConfig) {
      throw new Error(
        `Docusaurus bug, no locale config found for locale=${locale}`,
      );
    }
    return localeConfig;
  };

  const getBaseURLForLocale = (locale: string) => {
    const localeConfig = getLocaleConfig(locale);
    const isSameDomain = localeConfig.url === siteConfig.url;
    if (isSameDomain) {
      const raw = `${SCHEME}${alternatePageUtils.createUrl({ locale, fullyQualified: false })}`;
      return translateAlternateUrl(raw, locale, defaultLocale);
    }
    return alternatePageUtils.createUrl({ locale, fullyQualified: true });
  };

  return {
    getURL: (locale: string, options: { queryString?: string }) => {
      const finalSearch = mergeSearchStrings(
        [search, options.queryString],
        "append",
      );
      return `${getBaseURLForLocale(locale)}${finalSearch}${hash}`;
    },
    getLabel: (locale: string) => getLocaleConfig(locale).label,
    getLang: (locale: string) => getLocaleConfig(locale).htmlLang,
  };
}

type Props = {
  mobile?: boolean;
  dropdownItemsBefore?: unknown[];
  dropdownItemsAfter?: unknown[];
  queryString?: string;
  [key: string]: unknown;
};

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore = [],
  dropdownItemsAfter = [],
  queryString,
  ...props
}: Props): React.ReactElement {
  const utils = useLocaleDropdownUtils();
  const {
    i18n: { currentLocale, locales },
  } = useDocusaurusContext();

  const localeItems = locales.map((locale) => ({
    label: utils.getLabel(locale),
    lang: utils.getLang(locale),
    to: utils.getURL(locale, { queryString }),
    target: "_self",
    autoAddBaseUrl: false,
    className:
      locale === currentLocale
        ? mobile
          ? "menu__link--active"
          : "dropdown__link--active"
        : "",
    onClick: () => {
      try {
        localStorage.setItem("kobudo-locale", locale);
      } catch (e) {}
    },
  }));

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  const dropdownLabel = mobile
    ? translate({
        message: "Languages",
        id: "theme.navbar.mobileLanguageDropdown.label",
        description: "The label for the mobile language switcher dropdown",
      })
    : utils.getLabel(currentLocale);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
