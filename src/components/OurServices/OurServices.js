import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Image Imports
import RoomAddition from "../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

const ServicesTitle = styled.h2`
  color: rgba(0, 0, 0, 0.5);
`;

const OurServices = () => (
  <Container>
    <Row>
      <Col>
        <div style={{ padding: `0.5rem` }}>
          <img src={FullRemodeling} alt="Full Remodeling" />
          <h3>Full Remodeling</h3>
          <p className="text-justify">
            Whether it’s a new addition to the family or desired expansion Brother and Brother
            Builders has the experience to guide through every step of the process.
          </p>
        </div>
      </Col>

      <Col>
        <div style={{ padding: `0.5rem` }}>
          <img src={RoomAddition} alt="Room Additions" />
          <h3>Room Additions</h3>
          <p className="text-justify">
            Whether it’s a new addition to the family or desired expansion Brother and Brother
            Builders has the experience to guide through every step of the process.
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <div style={{ padding: `0.5rem` }}>
          <img src={Kitchens} alt="Kitchens" />
          <h3>Kitchens</h3>
          <p className="text-justify">
            Brother and Brother Builders understands that the kitchen is the heart of the home. It
            is where memories are created. The design requires extensive planning and is one of our
            specialties.
          </p>
        </div>
      </Col>

      <Col>
        <div style={{ padding: `0.5rem` }}>
          <img src={Bathroom} alt="Bathroom" />
          <h3>Bathroom</h3>
          <p className="text-justify">
            Brother and Brother Builders will transform your old ordinary bathroom to a custom spa.
            From tile to fixtures we will help you make the right choices with exceptional design.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default OurServices;
