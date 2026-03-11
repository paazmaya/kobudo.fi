import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const sections = [
  {label: 'Historia', to: '/historia/'},
  {label: 'Tyylit', to: '/tyylit/'},
  {label: 'Aseet', to: '/aseet/'},
  {label: 'Kata', to: '/kata/'},
  {label: 'Tutkimus', to: '/tutkimus'},
  {label: 'Tietoja', to: '/tietoja'},
];

export default function NotFound(): React.ReactElement {
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
              key={s.to}
              to={s.to}
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
