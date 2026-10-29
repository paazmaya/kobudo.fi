import React, { type ReactElement } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Metadata from "@theme-original/DocItem/Metadata";

type DocItemMetadataProps = React.ComponentProps<typeof Metadata>;

const SITE_PURPOSE_SUFFIX: Record<string, string> = {
  fi: "Osa kobudo.fi-sivustoa, joka on tutkimusresurssi Ryukyu kobudon historiasta, tyyleistä, aseista ja katoista.",
  en: "Part of kobudo.fi, a research resource on Ryukyu kobudo history, styles, weapons and kata.",
};

function toAbsoluteUrl(siteUrl: string, pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl.replace(/\/$/, "")}/${pathOrUrl.replace(/^\//, "")}`;
}

/**
 * Swizzled DocItem/Metadata wrapper that enriches documentation pages
 * with Open Graph, Twitter Card, and optional keywords meta tags.
 * (JSON-LD Article structured data is handled by DocItem/StructuredData.)
 */
export default function DocItemMetadata(props: DocItemMetadataProps): ReactElement {
  const {
    siteConfig,
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const frontMatterValues = frontMatter as Record<string, unknown>;

  const pageTitle = metadata.title;
  const description = (metadata.description ?? "").trim();
  const purposeSuffix = SITE_PURPOSE_SUFFIX[currentLocale] ?? SITE_PURPOSE_SUFFIX.fi;
  const socialDescription = description.includes(purposeSuffix)
    ? description
    : `${description} ${purposeSuffix}`;

  const socialImage = String(
    frontMatterValues.social_image ?? frontMatterValues.image ?? "/img/hero-dojo-wall.png",
  );
  const absoluteSocialImage = toAbsoluteUrl(siteConfig.url, socialImage);

  const keywords =
    Array.isArray(frontMatterValues.keywords) && frontMatterValues.keywords.length > 0
      ? frontMatterValues.keywords.join(", ")
      : typeof frontMatterValues.keywords === "string"
        ? frontMatterValues.keywords
        : undefined;

  return (
    <>
      <Metadata {...props} />
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:image" content={absoluteSocialImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={socialDescription} />
        <meta name="twitter:image" content={absoluteSocialImage} />

        {keywords ? <meta name="keywords" content={keywords} /> : null}
      </Head>
    </>
  );
}
