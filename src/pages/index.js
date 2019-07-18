import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import FeaturedTours from '../components/Home/FeaturedTours';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO title="Accueil" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Poursuivre l'exploration"
        info="Une envie de voyager ? De découvrir un autre pays ? Découvrez nos voyages à petits prix."
      >
        <AniLink fade to="/tours" className="btn-white">
          Découvrir les circuits
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
