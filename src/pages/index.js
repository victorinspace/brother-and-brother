import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import Awards from "../components/awards/awards";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero pageTitle="Brother & Brother Builders" subTitle="Your Home Design Experts" />
    <Awards />
  </Layout>
);

export default IndexPage;
