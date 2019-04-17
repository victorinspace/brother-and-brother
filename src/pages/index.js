import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import Awards from "../components/awards/awards";
import styled from "styled-components";

import SEO from "../components/seo";

const AwardsContainer = styled.section`
  max-width: 800px;
  padding: 1rem 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero pageTitle="Brother & Brother Builders" subTitle="Your Home Design Experts" />
    <AwardsContainer>
      <Awards style={{ maxWidth: `10px` }} />
    </AwardsContainer>
  </Layout>
);

export default IndexPage;
