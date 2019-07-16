import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default function error() {
  return <Layout>
    <header className={styles.error}>
      <Banner title="Oups! Cette page n'existe pas">
        <Link to='/' className="btn-white">Retour à l'accueil</Link>
        </Banner>
    </header>
  </Layout>
}
