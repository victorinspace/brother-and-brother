import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

// import CarouselOne from "../../assets/images/carousel/carousel-1.jpg";
// import CarouselTwo from "../../assets/images/carousel/carousel-2.jpg";
// import CarouselThree from "../../assets/images/carousel/carousel-3.jpg";
// import CarouselFour from "../../assets/images/carousel/carousel-4.jpg";

import RoomAddition from "../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

const CarouselWrapper = styled.section`
  display: block;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  width: 100%;
`;

const CarouselComponent = () => (
  <CarouselWrapper>
    <Carousel style={{ maxHeight: `95vh` }} controls="false">
      <Carousel.Item>
        <CarouselImg src={RoomAddition} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={FullRemodeling} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={Kitchens} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg src={Bathroom} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  </CarouselWrapper>
);

export default CarouselComponent;
