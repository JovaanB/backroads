import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner';
import SEO from '../components/SEO';

export default function error() {
  return (
    <Layout>
      <SEO title="Erreur 404" />
      <header className={styles.error}>
        <Banner title="Oups! Cette page n'existe pas">
          <AniLink fade to="/" className="btn-white">
            Retour à l'accueil
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}
