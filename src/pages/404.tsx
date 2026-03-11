import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {FI_TO_EN} from '../utils/localePaths';

const sections = [
  {label: 'Historia', fi: '/historia/'},
  {label: 'Tyylit', fi: '/tyylit/'},
  {label: 'Aseet', fi: '/aseet/'},
  {label: 'Kata', fi: '/kata/'},
  {label: 'Tutkimus', fi: '/tutkimus'},
  {label: 'Tietoja', fi: '/tietoja'},
];

export default function NotFound(): React.ReactElement {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const isEn = currentLocale === 'en';
  return (
    <Layout title="Sivua ei löydy">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main style={{maxWidth: '720px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center'}}>
        <h1 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem'}}>Sivua ei löydy</h1>
        <p style={{fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.8}}>
          Etsimääsi sivua ei löydy. Voit palata etusivulle tai selata sisältöä alta.
        </p>
        <nav aria-label="Sivuston osiot" style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem'}}>
          {sections.map((s) => (
            <Link
              key={s.fi}
              to={isEn ? (FI_TO_EN[s.fi] ?? s.fi) : s.fi}
              className="kb-hero__cta kb-hero__cta--secondary"
              style={{minWidth: '140px'}}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <Link to="/" className="kb-hero__cta kb-hero__cta--primary">
          Etusivulle
        </Link>
      </main>
    </Layout>
  );
}
