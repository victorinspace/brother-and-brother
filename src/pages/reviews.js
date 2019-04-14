import React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <Hero pageTitle="Reviews" />
    <h1>A list of reviews</h1>
    <p>We have been reviewed.</p>
  </Layout>
)

export default Reviews
