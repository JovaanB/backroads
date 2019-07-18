import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import Day from '../components/SingleTour/Day';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/SEO';

const Template = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} alt="main-image" />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single-tour"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />À partir de {price}€
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>À partir du {start}</h4>
          <h4>Durée : {days} jours</h4>
          <p className={styles.description}>{description}</p>
          <h2>Planning</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Retour aux circuits
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "DD MMMM YYYY", locale: "fr")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default Template;
