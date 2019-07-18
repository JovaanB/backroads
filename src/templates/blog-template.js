import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO';

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div>
            <img
              width="400"
              src={node.data.target.fields.file['en-US'].url}
              alt="blog"
            />
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields;

        return (
          <div>
            <br />
            <br />
            <br />
            <h1>Autre post : {title['en-US']}</h1>
            <img
              width="400"
              src={image['en-US'].fields.file['en-US'].url}
              alt=""
            />
            {documentToReactComponents(text['en-US'])}
            <br />
            <br />
            <br />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4> Publié le {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            Retour
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "DD MMMM YYYY", locale: "fr")
      text {
        json
      }
    }
  }
`;

export default Blog;
