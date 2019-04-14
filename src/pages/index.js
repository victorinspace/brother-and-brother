import React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout"
import Awards from "../components/awards/awards"
// import Image from "../components/image"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      pageTitle="Brother & Brother Builders"
      subTitle="Your Home Design Experts"
    />
    <Awards />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <p>This will be the carousel.</p>
    </div> */}
  </Layout>
)

export default IndexPage
