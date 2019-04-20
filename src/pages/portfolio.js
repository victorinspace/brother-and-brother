import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import PortfolioHero from "../images/project-photos/the-ashbrook-project/Web/img_8980.jpg";

const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero imgSrc={PortfolioHero} pageTitle="Portfolio" />
    <Container>
      <p>A long list of projects to come!</p>
    </Container>
  </Layout>
);

export default Portfolio;
