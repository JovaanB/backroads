import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Poursuivre l'exploration"
        info="Une envie de voyager ? De découvrir un autre pays ? Découvrez nos voyages à petits prix."
      >
        <Link to="/tours" className="btn-white">
          Découvrir les circuits
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
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
