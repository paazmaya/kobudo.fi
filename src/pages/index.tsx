import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { FI_TO_EN } from "../utils/localePaths";
import { OptimizedHeroImage, OptimizedCardImage } from "../components/OptimizedImage";

type HomeLocale = "fi" | "en";

interface SectionCard {
  title: string;
  description: string;
  href: string;
  imgAlt: string;
  imgSrc: string;
}

const HOME_COPY: Record<
  HomeLocale,
  {
    heroAlt: string;
    heroSubtitle: string;
    cardsHeading: string;
    readMore: string;
    cardAria: (title: string) => string;
    layoutDescription: string;
    ogTitle: string;
    ogDescription: string;
    jsonLdDescription: string;
    cards: SectionCard[];
  }
> = {
  fi: {
    heroAlt: "Perinteisiä okinawalaisia kobudo-aseita dojon seinämää vasten",
    heroSubtitle:
      "Ryukyu-saarten aseelliset kamppailulajit — niiden historia, sukulinjat, välineet ja katat. Tutkimusresurssi, joka jäljittää perinteitä Ryukyu-kuningaskunnasta nykypäivään.",
    cardsHeading: "Tutustu sivustoon",
    readMore: "Lue lisää →",
    cardAria: (title) => `Siirry osioon: ${title}`,
    layoutDescription:
      "Ryukyulaiset aseelliset kamppailulajit — historia, tyylit ja katat. Tutkimusresurssi todennettavilla lähteillä.",
    ogTitle: "Ryukyu Kobudo — Ryukyulaiset aseelliset kamppailulajit",
    ogDescription:
      "Ryukyu-saarten aseellisten kamppailulajien historia, sukulinjat, aseet ja katat — tutkimusresurssi.",
    jsonLdDescription: "Ryukyulaiset aseelliset kamppailulajit — historia, tyylit ja katat",
    cards: [
      {
        title: "Historia",
        description:
          "Ryukyu-kuningaskunnasta Pechin-sotilasvirkailijaluokkaan ja Taira Shinkenin nykyaikaiseen säilytystyöhön. Näin aseelliset kamppailutaidot säilyivät vuosisatojen poliittisten murrosten läpi.",
        href: "/historia/",
        imgAlt: "Kuviteltu kartta Ryukyu-saarista vanhan kalligrafian kanssa",
        imgSrc: "/img/card-ryukyu-map.png",
      },
      {
        title: "Tyylit ja Koulukunnat",
        description:
          "Ryukyu Kobujutsu, Matayoshi Kobudo, Yamane-ryū ja muut — kukin linja tuo omat tekniikkansa ja nimettyjen mestareiden kautta välittyneen perinteen.",
        href: "/tyylit/",
        imgAlt: "Sukupuu okinawalaisten kobudo-tyylien välillä",
        imgSrc: "/img/card-lineage-scroll.png",
      },
      {
        title: "Perinteiset Aseet",
        description:
          "Kahdeksan keskeistä asetta Tairan opetusohjelmassa: bō, sai, tonfa, nunchaku, kama, tekko, tinbē-rochin ja surujin. Jokaisella on oma historiansa, tekniikkansa ja katansa.",
        href: "/aseet/",
        imgAlt: "Kahdeksan perinteistä okinawalaista asetta seinällä",
        imgSrc: "/img/card-weapons-display.png",
      },
      {
        title: "Kata",
        description:
          "Miten katanimet ylittävät tyylirajat — sama perhe, kuten Sakugawa no Kon tai Hamahiga no Sai, toistuu Tairalla, Matayoshilla ja karaten aseopetusohjelmissa.",
        href: "/kata/",
        imgAlt: "Kalligrafinen katanimien merkintä",
        imgSrc: "/img/card-kata-scroll.png",
      },
      {
        title: "Tutkimus",
        description:
          "Keskeiset japaninkieliset teokset ja hakuteokset Ryukyu-aseellisten taiteiden tutkimiseen — esisodan antologioista moderniin okinawalaisen karaten ja kobudon tietosanakirjaan.",
        href: "/tutkimus",
        imgAlt: "Pino japanilaisia kamppailulajien hakuteoksia",
        imgSrc: "/img/card-research-books.png",
      },
      {
        title: "Tietoja",
        description:
          "Tietoja tästä sivustosta — sen tarkoituksesta, laajuudesta ja miten voit osallistua tähän jatkuvaan tutkimushankkeeseen korjauksilla tai lisälähteillä.",
        href: "/tietoja",
        imgAlt: "Abstrakti tutkimus- ja dokumentaatiokonsepti",
        imgSrc: "/img/card-about-journal.png",
      },
    ],
  },
  en: {
    heroAlt: "Traditional Okinawan kobudo weapons against a dojo background",
    heroSubtitle:
      "The weapon arts of the Ryukyu Islands — their history, lineages, tools and kata. A research resource tracing traditions from the Ryukyu Kingdom to the present day.",
    cardsHeading: "Explore the site",
    readMore: "Read more →",
    cardAria: (title) => `Go to ${title} section`,
    layoutDescription:
      "Okinawan weapon-based martial arts — history, styles and kata. A research resource with verifiable sources.",
    ogTitle: "Ryukyu Kobudo — Okinawan Weapon Arts",
    ogDescription:
      "History, lineages, weapons and kata of the Ryukyu Islands' weapon-based martial arts traditions.",
    jsonLdDescription: "Okinawan Weapon Arts — History, Styles & Kata",
    cards: [
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
    ],
  },
};

function useHomeCopy(): (typeof HOME_COPY)["fi"] {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  return currentLocale === "en" ? HOME_COPY.en : HOME_COPY.fi;
}

function HeroSection(): React.ReactElement {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isEn = currentLocale === "en";
  const copy = useHomeCopy();
  return (
    <section className="kb-hero">
      <OptimizedHeroImage
        src="/img/hero-dojo-wall.png"
        alt={copy.heroAlt}
        width={1184}
        height={448}
      />
      <h1 className="kb-hero__title">Ryukyu Kobudo</h1>
      <p className="kb-hero__subtitle">{copy.heroSubtitle}</p>
      <div className="kb-hero__actions">
        <Link
          to={isEn ? FI_TO_EN["/historia/"] : "/historia/"}
          className="kb-hero__cta kb-hero__cta--primary"
        >
          {isEn ? "Explore history" : "Tutustu historiaan"}
        </Link>
        <Link
          to={isEn ? FI_TO_EN["/aseet/"] : "/aseet/"}
          className="kb-hero__cta kb-hero__cta--secondary"
        >
          {isEn ? "Browse weapons" : "Katso aseet"}
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
  const copy = useHomeCopy();
  return (
    <section className="kb-cards">
      <p className="kb-cards__heading">{copy.cardsHeading}</p>
      <div className="kb-grid">
        {copy.cards.map((card) => (
          <article key={card.href} className="kb-card">
            <Link
              to={isEn ? (FI_TO_EN[card.href] ?? card.href) : card.href}
              className="kb-card__link"
              aria-label={copy.cardAria(card.title)}
            >
              <OptimizedCardImage src={card.imgSrc} alt={card.imgAlt} width={384} height={256} />
              <div className="kb-card__body">
                <h2 className="kb-card__title">{card.title}</h2>
                <p className="kb-card__desc">{card.description}</p>
                <span className="kb-card__arrow" aria-hidden="true">
                  {copy.readMore}
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
  const {
    siteConfig,
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const copy = currentLocale === "en" ? HOME_COPY.en : HOME_COPY.fi;
  return (
    <Layout title={siteConfig.title} description={copy.layoutDescription}>
      <Head>
        <meta property="og:title" content={copy.ogTitle} />
        <meta property="og:description" content={copy.ogDescription} />
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
            description: copy.jsonLdDescription,
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
