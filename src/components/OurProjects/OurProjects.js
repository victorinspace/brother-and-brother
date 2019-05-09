import React from "react";
import styled from "styled-components";

// Font Awesome Imports
import { FaBriefcase } from "react-icons/fa";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// Image Imports
import Kitchens from "../../assets/images/project-photos/KITCHEN-The-Arezzo-Project/K1_15511-2.jpg";
import Bathroom from "../../assets/images/project-photos/BATHROOM-B&A-The-Vizcaya-Project/image-23.jpg";
import FullRemodeling from "../../assets/images/project-photos/FULL-Ben&Sandy-Wu//image-19.jpg";
import RoomAddition from "../../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13872-HDR.jpg";

// Component Styles
const CarouselImg = styled.img`
  width: 100%;
`;

const OurProjects = () => (
  <Container style={{ paddingTop: `120px` }}>
    <Row>
      <Col>
        <Carousel controls="false" fade="true" interval="2000" indicators="false">
          <Carousel.Item>
            <CarouselImg src={Kitchens} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Bathroom} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={FullRemodeling} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={RoomAddition} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default OurProjects;
