import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);
  return (
    <section className={styles.about}>
      <Title title="À" subtitle="Propos" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explorer la différence</h4>
          <p>
            Envie de s'évader ? De partir à l'étranger ? De visiter des
            monuments historiques ? N'hésitez pas à consulter nos circuits - nos
            voyages
          </p>
          <p>
            Une question ? Nos experts en voyages sont à votre disposition
            24/24h et 7/7 jours !{' '}
          </p>
          <button type="button" className="btn-primary">
            plus d'informations
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
