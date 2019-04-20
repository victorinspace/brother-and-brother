import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import RoomAddition from "../images/project-photos/Addition-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../images/project-photos/Bathroom-Remodel_The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../images/project-photos/Kitchen-&-Bathroom_The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../images/project-photos/Bathroom_castro-valley/1Y6A1829.jpg";

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero pageTitle="Services" />
    <Wrapper>
      <Container>
        <Row>
          <Card border="light" style={{ width: `30rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
            <Card.Body>
              <Card.Title>Full Remodeling</Card.Title>
              <Card.Text>
                Whether it’s a new addition to the family or desired expansion Brother and Brother
                Builders has the experience to guide through every step of the process.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="light" style={{ width: `30rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={RoomAddition} alt="Room Additions" />
            <Card.Body>
              <Card.Title>Room Additions</Card.Title>
              <Card.Text>
                Whether it’s a new addition to the family or desired expansion Brother and Brother
                Builders has the experience to guide through every step of the process.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card border="light" style={{ width: `30rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
            <Card.Body>
              <Card.Title>Kitchens</Card.Title>
              <Card.Text>
                Brother and Brother Builders understands that the kitchen is the heart of the home.
                It is where memories are created. The design requires extensive planning and is one
                of our specialties.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="light" style={{ width: `30rem`, margin: `0.45rem` }}>
            <Card.Img variant="top" src={Bathroom} alt="Bathroom" />
            <Card.Body>
              <Card.Title>Bathroom</Card.Title>
              <Card.Text>
                Brother and Brother Builders will transform your old ordinary bathroom to a custom
                spa. From tile to fixtures we will help you make the right choices with exceptional
                design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default Services;
