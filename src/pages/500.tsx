import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

declare global {
  interface Window {
    clarity?: (command: string, key: string, value: string) => void;
  }
}

/**
 * 500 Server Error page with bilingual (fi/en) text,
 * localized homepage link, and custom illustration banner.
 */
export default function ServerError(): React.ReactElement {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();

  const currentPath = location.pathname;
  const isEn =
    i18n.currentLocale === "en" || currentPath.startsWith("/en/") || currentPath === "/en";

  // Send info to clarity
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", "500_path", currentPath);
  }

  const pageTitle = isEn ? "Server Error" : "Palvelinvirhe";
  const description = isEn
    ? "An unexpected error occurred while processing your request. Please try again later."
    : "Sivustolla tapahtui odottamaton virhe. Yritä hetken kuluttua uudelleen.";
  const homeLinkText = isEn ? "Homepage" : "Etusivulle";
  const homeLinkUrl = isEn ? "/en/" : "/";
  const imgAlt = isEn
    ? "Experienced craftswoman repairing a fallen wooden weapons rack in a traditional Okinawan dojo"
    : "Kokenut käsityöläinen korjaamassa kaatunutta puista asetelinettä perinteisessä okinawalaisessa dojossa";

  return (
    <Layout title={pageTitle} description={description}>
      <main className="kb-not-found">
        <h1 className="kb-not-found__title">{pageTitle}</h1>
        <img
          src="/img/banner-500-repair.png"
          alt={imgAlt}
          width={960}
          height={384}
          className="kb-banner"
        />
        <p className="kb-not-found__description">{description}</p>

        <Link to={homeLinkUrl} className="kb-hero__cta kb-hero__cta--primary">
          {homeLinkText}
        </Link>
      </main>
    </Layout>
  );
}
