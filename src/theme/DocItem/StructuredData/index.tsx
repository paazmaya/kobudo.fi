import React, { type ReactElement } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import StructuredData from "@theme-original/DocItem/StructuredData";

type DocItemStructuredDataProps = React.ComponentProps<typeof StructuredData>;

function toAbsoluteUrl(siteUrl: string, pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl.replace(/\/$/, "")}/${pathOrUrl.replace(/^\//, "")}`;
}

export default function DocItemStructuredData(props: DocItemStructuredDataProps): ReactElement {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const frontMatterValues = frontMatter as Record<string, unknown>;

  const headline = metadata.title;
  const description = metadata.description ?? siteConfig.tagline;
  const imagePath = String(
    frontMatterValues.social_image ?? frontMatterValues.image ?? "/img/hero-dojo-wall.png",
  );

  const canonicalUrl = toAbsoluteUrl(siteConfig.url, metadata.permalink);
  const image = toAbsoluteUrl(siteConfig.url, imagePath);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    inLanguage: i18n.currentLocale,
    mainEntityOfPage: canonicalUrl,
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
      <StructuredData {...props} />
      <Head>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Head>
    </>
  );
}
