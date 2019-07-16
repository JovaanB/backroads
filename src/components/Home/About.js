import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="À" subtitle="Propos" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about-company" />
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
