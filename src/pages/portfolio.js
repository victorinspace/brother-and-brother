import React from "react";
import { Link } from "gatsby";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PortfolioHero from "../images/project-photos/the-ashbrook-project/Web/img_8980.jpg";

import RoomAddition from "../images/project-photos/Addition_The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../images/project-photos/Bathroom-Remodel_The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../images/project-photos/Kitchen-&-Bathroom_The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../images/project-photos/Bathroom_castro-valley/1Y6A1829.jpg";

const Wrapper = styled.section`
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
    <Wrapper>
      <Container>
        <Row>
          <Link to="">
            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
              <Card.Body>
                <Card.Title>Full Remodeling</Card.Title>
              </Card.Body>
            </Card>
          </Link>

          <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={RoomAddition} alt="Room Additions" />
            <Card.Body>
              <Card.Title>Room Additions</Card.Title>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
            <Card.Body>
              <Card.Title>Kitchens</Card.Title>
            </Card.Body>
          </Card>

          <Link to="/portfolios/bathroom">
            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={Bathroom} alt="Bathroom" />
              <Card.Body>
                <Card.Title>Bathroom</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default Portfolio;
