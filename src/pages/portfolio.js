import React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero pageTitle="Portfolio" />
    <p>A long list of projects.</p>
  </Layout>
)

export default Portfolio
