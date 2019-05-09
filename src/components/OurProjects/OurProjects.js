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
import One from "../../assets/images/carousel/bb-image-1.jpeg";
import Two from "../../assets/images/carousel/bb-image-2.jpeg";
import Three from "../../assets/images/carousel/bb-image-3.jpeg";
import Four from "../../assets/images/carousel/bb-image-4.jpeg";
import Five from "../../assets/images/carousel/bb-image-5.jpeg";
import Six from "../../assets/images/carousel/bb-image-6.jpeg";
import Seven from "../../assets/images/carousel/bb-image-7.jpeg";
import Eight from "../../assets/images/carousel/bb-image-8.jpeg";
import Nine from "../../assets/images/carousel/bb-image-9.jpeg";
import Ten from "../../assets/images/carousel/bb-image-10.jpeg";
import Eleven from "../../assets/images/carousel/bb-image-11.jpeg";
import Twelve from "../../assets/images/carousel/bb-image-12.jpeg";
import Thirteen from "../../assets/images/carousel/bb-image-13.jpeg";
import Fourteen from "../../assets/images/carousel/bb-image-14.jpeg";
import Fifteen from "../../assets/images/carousel/bb-image-15.jpeg";
import Sixteen from "../../assets/images/carousel/bb-image-16.jpeg";

// Component Styles
const CarouselImg = styled.img`
  width: 100%;
`;

const OurProjects = () => (
  <Container style={{ marginTop: `9rem` }}>
    <Row>
      <Col>
        <Carousel controls="false" fade="true" interval="2000" indicators="false">
          <Carousel.Item>
            <CarouselImg src={One} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Two} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Three} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Four} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Five} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Six} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Seven} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Eight} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Nine} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Ten} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Eleven} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Twelve} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Thirteen} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Fourteen} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Fifteen} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src={Sixteen} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default OurProjects;
