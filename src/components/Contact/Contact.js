import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Nous" subtitle="contacter" />
      <div className={styles.center}>
        <form action="https://formspree.io/bienvenujovan@gmail.com" method="POST" className={styles.form}>
          <div>
            <label htmlFor="Nom">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Jade Orvoyager"
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Votre message"
              style={{ resize: 'none' }}
              maxLength="2500"
            />
          </div>
          <div>
            <input type="submit" value="Envoyer 🚀" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
