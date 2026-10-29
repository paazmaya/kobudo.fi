import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

declare global {
  interface Window {
    clarity?: (command: string, key: string, value: string) => void;
  }
}

/**
 * Swizzled 404 NotFound content component with bilingual (fi/en) text,
 * localized homepage link, and custom illustration banner.
 */
export default function NotFoundContent(): React.ReactElement {
  const location = useLocation();
  // Detect locale from URL path since Docusaurus context doesn't work reliably on 404 pages
  const currentPath = location.pathname;
  const isEn = currentPath.startsWith("/en/") || currentPath === "/en";
  // Send info to clarity
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", "404_path", currentPath);
  }

  const pageTitle = isEn ? "Page Not Found" : "Sivua ei löydy";
  const description = isEn
    ? "The page you are looking for cannot be found."
    : "Hakemaasi sivua ei löydy.";
  const homeLinkText = isEn ? "Homepage" : "Etusivulle";
  const homeLinkUrl = isEn ? "/en/" : "/";
  const imgAlt = isEn
    ? "Confused martial artist searching through ancient scrolls in a dimly lit traditional dojo library"
    : "Hämmentynyt kamppailulajien harjoittaja etsimässä vanhoja kääröjä hämärässä perinteisessä dojo-kirjastossa";

  return (
    <main className="kb-not-found">
      <h1 className="kb-not-found__title">{pageTitle}</h1>
      <img
        src="/img/banner-404-not-finding-papers.png"
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
  );
}
