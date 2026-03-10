import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

interface SectionCard {
  title: string;
  description: string;
  href: string;
  imgAlt: string;
  imgSrc: string;
}

const cards: SectionCard[] = [
  {
    title: 'History',
    description:
      'From the Ryukyu Kingdom through the Pechin warrior class to the modern preservation work of Taira Shinken. Trace how these weapon arts survived centuries of political change.',
    href: '/history/',
    imgAlt: 'Illustrated map of the Ryukyu Islands with old calligraphy',
    imgSrc: '/img/card-ryukyu-map.jpg',
  },
  {
    title: 'Styles & Lineages',
    description:
      'Ryukyu Kobujutsu, Matayoshi Kobudo, Yamane-ryū and others — each lineage carries distinct technical approaches and a unique transmission from named masters.',
    href: '/styles/',
    imgAlt: 'Lineage chart of Okinawan kobudo styles',
    imgSrc: '/img/card-lineage-scroll.jpg',
  },
  {
    title: 'Traditional Weapons',
    description:
      'Eight core weapons form the Taira curriculum: Bō, Sai, Tonfa, Nunchaku, Kama, Tekko, Tinbe-Rochin and Surujin. Each has its own history, technique and kata.',
    href: '/weapons/',
    imgAlt: 'Eight traditional Okinawan weapons displayed on a wall',
    imgSrc: '/img/card-weapons-display.jpg',
  },
  {
    title: 'Kata',
    description:
      'How kata names cross style boundaries — the same family such as Sakugawa no Kon or Hamahiga no Sai recurs across Taira, Matayoshi and karate-based weapon curricula.',
    href: '/kata/',
    imgAlt: 'Calligraphic rendition of kata name characters',
    imgSrc: '/img/card-kata-scroll.jpg',
  },
  {
    title: 'Research',
    description:
      'Core Japanese-language books and reference works for researching Ryukyu weapon arts — from pre-war anthologies to modern encyclopedias of Okinawan karate and kobudo.',
    href: '/research',
    imgAlt: 'Stack of Japanese martial arts reference books',
    imgSrc: '/img/card-research-books.jpg',
  },
  {
    title: 'About',
    description:
      'About this site — its purpose, scope and how to contribute corrections or additional sources to this ongoing research project.',
    href: '/about',
    imgAlt: 'Abstract representation of research and documentation',
    imgSrc: '/img/card-about-journal.jpg',
  },
];

function HeroSection(): React.ReactElement {
  return (
    <section className="kb-hero">
      <img
        src="/img/hero-dojo-wall.jpg"
        alt="Traditional Okinawan kobudo weapons against a dojo background"
        width={1184}
        height={448}
        loading="eager"
        className="kb-hero__image"
      />
      <h1 className="kb-hero__title">Ryukyu Kobudo</h1>
      <p className="kb-hero__subtitle">
        The weapon arts of the Ryukyu Islands — their history, lineages, tools and kata.
        A research resource tracing traditions from the Ryukyu Kingdom to the present day.
      </p>
      <div className="kb-hero__actions">
        <Link to="/history/" className="kb-hero__cta kb-hero__cta--primary">
          Explore History
        </Link>
        <Link to="/weapons/" className="kb-hero__cta kb-hero__cta--secondary">
          View Weapons
        </Link>
      </div>
    </section>
  );
}

function CardGrid(): React.ReactElement {
  return (
    <section className="kb-cards">
      <p className="kb-cards__heading">Explore the site</p>
      <div className="kb-grid">
        {cards.map((card) => (
          <article key={card.href} className="kb-card">
            <Link to={card.href} className="kb-card__link" aria-label={`Go to ${card.title} section`}>
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
                <span className="kb-card__arrow" aria-hidden="true">Read more →</span>
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
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Head>
        <meta property="og:title" content="Ryukyu Kobudo — Okinawan Weapon Arts" />
        <meta
          property="og:description"
          content="History, lineages, weapons and kata of the Ryukyu Islands' weapon-based martial arts traditions."
        />
      </Head>
      <main>
        <HeroSection />
        <CardGrid />
      </main>
    </Layout>
  );
}
