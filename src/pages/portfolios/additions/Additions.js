import React from "react";
import { Link } from "gatsby";
import Hero from "../../../components/HeroComponent/HeroComponent.js";
import Layout from "../../../components/layout";
import styled from "styled-components";
import SEO from "../../../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AboutHero from "../../../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";

import RoomAddition from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";

const Wrapper = styled.section`
  max-width: 95vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Additions = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero imgSrc={AboutHero} pageTitle="Room Additions" />
    <Wrapper>
      <Container>
        <Row>
          <Link to="/portfolios/additions/cedar-project/CedarProject">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={RoomAddition} alt="Full Remodeling" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>The Cedar Project</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default Additions;
