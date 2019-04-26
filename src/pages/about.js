import React from "react";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import AboutHero from "../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";

const Container = styled.section`
  max-width: 1000px;
  margin: 50px auto 0;
  padding: 1rem;
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero imgSrc={AboutHero} pageTitle="Who we are" subTitle="What we do best" />
    <Container>
      <p>
        Brother and Brother Builders is a licensed, bonded and insured remodeling and building
        company servicing the Northern California area. We are family owned and have been in
        business for over 10 years. Our comprehensive experience will provide you with exceptional
        results and satisfaction. We specialize in room additions, kitchen and bathroom remodeling
        and all areas of home construction. Our team looks forward to working with you on your
        project.
      </p>
    </Container>
  </Layout>
);

export default About;
