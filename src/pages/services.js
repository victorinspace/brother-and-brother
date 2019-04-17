import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ServiceContainer = styled.article`
  padding: 5px;
  margin: 2rem;
  height: 300px;
  width: 400px;
`;

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero pageTitle="Services" />
    <Container>
      <ServiceContainer>
        <h1>Full Remodeling</h1>
        <p>
          Whether it’s a new addition to the family or desired expansion Brother and Brother
          Builders has the experience to guide through every step of the process.
        </p>
      </ServiceContainer>

      <ServiceContainer>
        <h1>Room Additions</h1>
        <p>
          Whether it’s a new addition to the family or desired expansion Brother and Brother
          Builders has the experience to guide through every step of the process.
        </p>
      </ServiceContainer>

      <ServiceContainer>
        <h1>Kitchens</h1>
        <p>
          Brother and Brother Builders understands that the kitchen is the heart of the home. It is
          where memories are created. The design requires extensive planning and is one of our
          specialties.
        </p>
      </ServiceContainer>

      <ServiceContainer>
        <h1>Bathroom Remodeling</h1>
        <p>
          Brother and Brother Builders will transform your old ordinary bathroom to a custom spa.
          From tile to fixtures we will help you make the right choices with exceptional design
        </p>
      </ServiceContainer>
    </Container>
  </Layout>
);

export default Services;
