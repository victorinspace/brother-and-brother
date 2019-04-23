import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import CarouselComponent from "../components/carousel/Carousel";

import Awards from "../components/awards/Awards";

const AwardsContainer = styled.section`
  max-width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  display: block;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <CarouselComponent />

    <AwardsContainer>
      <Awards />
    </AwardsContainer>
  </Layout>
);

export default IndexPage;
