import React, { type ReactElement } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Metadata from "@theme-original/DocItem/Metadata";

type DocItemMetadataProps = React.ComponentProps<typeof Metadata>;

const SITE_PURPOSE_SUFFIX =
  "Part of kobudo.fi, a research resource on Ryukyu kobudo history, styles, weapons and kata.";

function toAbsoluteUrl(siteUrl: string, pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl.replace(/\/$/, "")}/${pathOrUrl.replace(/^\//, "")}`;
}

export default function DocItemMetadata(props: DocItemMetadataProps): ReactElement {
  const {
    siteConfig,
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const frontMatterValues = frontMatter as Record<string, unknown>;

  const pageTitle = metadata.title;
  const description = (metadata.description ?? "").trim();
  const socialDescription = description.includes(SITE_PURPOSE_SUFFIX)
    ? description
    : `${description} ${SITE_PURPOSE_SUFFIX}`;

  const socialImage = String(
    frontMatterValues.social_image ?? frontMatterValues.image ?? "/img/hero-dojo-wall.png",
  );
  const absoluteSocialImage = toAbsoluteUrl(siteConfig.url, socialImage);
  const canonicalUrl = toAbsoluteUrl(siteConfig.url, metadata.permalink);

  const keywords =
    Array.isArray(frontMatterValues.keywords) && frontMatterValues.keywords.length > 0
      ? frontMatterValues.keywords.join(", ")
      : typeof frontMatterValues.keywords === "string"
        ? frontMatterValues.keywords
        : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description,
    image: absoluteSocialImage,
    mainEntityOfPage: canonicalUrl,
    inLanguage: currentLocale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.title,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl(siteConfig.url, "/img/navbar-logo.png"),
      },
    },
  };

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
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

        {keywords ? <meta name="keywords" content={keywords} /> : null}
      </Head>
    </>
  );
}
