import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

// import CarouselOne from "../../assets/images/carousel/carousel-1.jpg";
// import CarouselTwo from "../../assets/images/carousel/carousel-2.jpg";
// import CarouselThree from "../../assets/images/carousel/carousel-3.jpg";
// import CarouselFour from "../../assets/images/carousel/carousel-4.jpg";

import Kitchens from "../../assets/images/project-photos/KITCHEN-The-Arezzo-Project/K1_15511-2.jpg";
import Bathroom from "../../assets/images/project-photos/BATHROOM-B&A-The-Vizcaya-Project/image-23.jpg";
import FullRemodeling from "../../assets/images/project-photos/FULL-Ben&Sandy-Wu//image-19.jpg";
import RoomAddition from "../../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13872-HDR.jpg";

const CarouselWrapper = styled.section`
  display: block;
  overflow: hidden;
  padding: 2rem 0 0;
`;

const CarouselImg = styled.img`
  width: 100%;
`;

const CarouselComponent = () => (
  <CarouselWrapper>
    <Carousel style={{ maxHeight: `90vh` }} controls="false">
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
  </CarouselWrapper>
);

export default CarouselComponent;
