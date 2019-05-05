import React from "react";
import { Link } from "gatsby";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PortfolioHero from "../assets/images/project-photos/FULL-Ben&Sandy-Wu/image-58.jpg";

import RoomAddition from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

const Wrapper = styled.section`
  max-width: 95vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero imgSrc={PortfolioHero} pageTitle="Portfolio" />
    <Wrapper>
      <Container>
        <Row>
          <Link to="#">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>All</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <Link to="#">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={Bathroom} alt="Bathroom" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>Bathroom Remodeling</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <Link to="#">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>Before/After</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <Link to="#">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={RoomAddition} alt="Room Additions" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>Full Remodel</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <Link to="#">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>Kitchen Remodeling</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <a href="/portfolios/additions/Additions">
            <Card border="light" style={{ width: `19.5rem`, margin: `0.75rem` }}>
              <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
              <Card.Body>
                <Card.Title style={{ fontSize: `1.5em` }}>Room Additions</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default Portfolio;
