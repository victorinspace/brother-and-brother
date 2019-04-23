import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import CarouselOne from "../../images/carousel/carousel-1.jpg";
import CarouselTwo from "../../images/carousel/carousel-2.jpg";
import CarouselThree from "../../images/carousel/carousel-3.jpg";
import CarouselFour from "../../images/carousel/carousel-4.jpg";

const CarouselWrapper = styled.section`
  display: block;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  width: 100%;
`;

const CarouselComponent = () => (
  <CarouselWrapper>
    <Carousel style={{ maxHeight: `80vh` }}>
      <Carousel.Item>
        <CarouselImg src={CarouselOne} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={CarouselTwo} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={CarouselThree} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={CarouselFour} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  </CarouselWrapper>
);

export default CarouselComponent;
