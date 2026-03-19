import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { FI_TO_EN } from "../utils/localePaths";

interface SectionCard {
  title: string;
  description: string;
  href: string;
  imgAlt: string;
  imgSrc: string;
}

const cards: SectionCard[] = [
  {
    title: "Historia",
    description:
      "From the Ryukyu Kingdom through the Pechin warrior class to the modern preservation work of Taira Shinken. Trace how these weapon arts survived centuries of political change.",
    href: "/historia/",
    imgAlt: "Illustrated map of the Ryukyu Islands with old calligraphy",
    imgSrc: "/img/card-ryukyu-map.png",
  },
  {
    title: "Tyylit ja Koulukunnat",
    description:
      "Ryukyu Kobujutsu, Matayoshi Kobudo, Yamane-ryū and others — each lineage carries distinct technical approaches and a unique transmission from named masters.",
    href: "/tyylit/",
    imgAlt: "Lineage chart of Okinawan kobudo styles",
    imgSrc: "/img/card-lineage-scroll.png",
  },
  {
    title: "Perinteiset Aseet",
    description:
      "Eight core weapons form the Taira curriculum: Bō, Sai, Tonfa, Nunchaku, Kama, Tekko, Tinbe-Rochin and Surujin. Each has its own history, technique and kata.",
    href: "/aseet/",
    imgAlt: "Eight traditional Okinawan weapons displayed on a wall",
    imgSrc: "/img/card-weapons-display.png",
  },
  {
    title: "Kata",
    description:
      "How kata names cross style boundaries — the same family such as Sakugawa no Kon or Hamahiga no Sai recurs across Taira, Matayoshi and karate-based weapon curricula.",
    href: "/kata/",
    imgAlt: "Calligraphic rendition of kata name characters",
    imgSrc: "/img/card-kata-scroll.png",
  },
  {
    title: "Tutkimus",
    description:
      "Core Japanese-language books and reference works for researching Ryukyu weapon arts — from pre-war anthologies to modern encyclopedias of Okinawan karate and kobudo.",
    href: "/tutkimus",
    imgAlt: "Stack of Japanese martial arts reference books",
    imgSrc: "/img/card-research-books.png",
  },
  {
    title: "Tietoja",
    description:
      "About this site — its purpose, scope and how to contribute corrections or additional sources to this ongoing research project.",
    href: "/tietoja",
    imgAlt: "Abstract representation of research and documentation",
    imgSrc: "/img/card-about-journal.png",
  },
];

function HeroSection(): React.ReactElement {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isEn = currentLocale === "en";
  return (
    <section className="kb-hero">
      <img
        src="/img/hero-dojo-wall.png"
        alt="Traditional Okinawan kobudo weapons against a dojo background"
        width={1184}
        height={448}
        loading="eager"
        className="kb-hero__image"
      />
      <h1 className="kb-hero__title">Ryukyu Kobudo</h1>
      <p className="kb-hero__subtitle">
        The weapon arts of the Ryukyu Islands — their history, lineages, tools and kata. A research
        resource tracing traditions from the Ryukyu Kingdom to the present day.
      </p>
      <div className="kb-hero__actions">
        <Link
          to={isEn ? FI_TO_EN["/historia/"] : "/historia/"}
          className="kb-hero__cta kb-hero__cta--primary"
        >
          Tutustu historiaan
        </Link>
        <Link
          to={isEn ? FI_TO_EN["/aseet/"] : "/aseet/"}
          className="kb-hero__cta kb-hero__cta--secondary"
        >
          Katso aseet
        </Link>
      </div>
    </section>
  );
}

function CardGrid(): React.ReactElement {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isEn = currentLocale === "en";
  return (
    <section className="kb-cards">
      <p className="kb-cards__heading">Tutustu sivustoon</p>
      <div className="kb-grid">
        {cards.map((card) => (
          <article key={card.href} className="kb-card">
            <Link
              to={isEn ? (FI_TO_EN[card.href] ?? card.href) : card.href}
              className="kb-card__link"
              aria-label={`Go to ${card.title} section`}
            >
              <img
                src={card.imgSrc}
                alt={card.imgAlt}
                width={384}
                height={256}
                loading="lazy"
                className="kb-card__img"
              />
              <div className="kb-card__body">
                <h2 className="kb-card__title">{card.title}</h2>
                <p className="kb-card__desc">{card.description}</p>
                <span className="kb-card__arrow" aria-hidden="true">
                  Read more →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Head>
        <meta property="og:title" content="Ryukyu Kobudo — Okinawan Weapon Arts" />
        <meta
          property="og:description"
          content="History, lineages, weapons and kata of the Ryukyu Islands' weapon-based martial arts traditions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kobudo.fi/img/hero-dojo-wall.png" />
        <meta property="og:image:width" content="1184" />
        <meta property="og:image:height" content="448" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://kobudo.fi/img/hero-dojo-wall.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Ryukyu Kobudo",
            url: "https://kobudo.fi",
            description: "Okinawan Weapon Arts — History, Styles & Kata",
            inLanguage: ["fi", "en"],
          })}
        </script>
      </Head>
      <main>
        <HeroSection />
        <CardGrid />
      </main>
    </Layout>
  );
}
