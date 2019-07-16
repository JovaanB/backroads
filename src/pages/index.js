import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Poursuivre l'exploration"
        info="Une envie de voyager ? De découvrir un autre pays ? Découvrez nos voyages à petits prix."
      >
        <Link to="/tours" className="btn-white">
          Découvrir les circuits
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
);
