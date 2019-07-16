import React from 'react';
import styles from '../css/footer.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={StyleSheet.copyright}>
        copyright &copy; {new Date().getFullYear()} Backroads - agence de
        voyages{' '}
      </div>
    </footer>
  );
};

export default Footer;
