import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// Image Imports
import RoomAddition from "../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

const OurServices = () => (
  <div>
    <h2 style={{ margin: `0 10%` }}>
      Our Services {` `}
      <FaHome />
    </h2>

    <Container>
      <Row>
        <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
          <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
          <Card.Body>
            <Card.Title>Full Remodeling</Card.Title>
            <Card.Text>
              Whether it’s a new addition to the family or desired expansion Brother and Brother
              Builders has the experience to guide through every step of the process.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
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
        <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
          <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
          <Card.Body>
            <Card.Title>Kitchens</Card.Title>
            <Card.Text>
              Brother and Brother Builders understands that the kitchen is the heart of the home. It
              is where memories are created. The design requires extensive planning and is one of
              our specialties.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
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
  </div>
);

export default OurServices;
