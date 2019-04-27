import React from "react";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import ReviewsHero from "../assets/images/project-photos/BATHROOM-B&A-The-Vizcaya-Project/image-22.jpg";
import ReviewGraphic from "../assets/images/review-graphic.jpeg";

const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0;
`;

const ReviewContainer = styled.article`
  padding: 5px;
  margin: 2rem;
  height: 300px;
  ${"" /* width: 400px; */}
`;

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <Hero imgSrc={ReviewsHero} pageTitle="REVIEWS" />
    <Container>
      <ReviewContainer>
        <img style={{ width: `70%` }} src={ReviewGraphic} alt="alt" />
      </ReviewContainer>
    </Container>
  </Layout>
);

export default Reviews;
