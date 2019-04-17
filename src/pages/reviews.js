import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0;
  display: flex;
`;

const ReviewContainer = styled.article`
  padding: 5px;
  margin: 2rem;
  height: 300px;
  width: 400px;
`;

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <Hero pageTitle="Reviews" />
    <Container>
      <ReviewContainer>
        <h1>A list of reviews</h1>
        <p>So many reviews to review!!</p>
      </ReviewContainer>
    </Container>
  </Layout>
);

export default Reviews;
