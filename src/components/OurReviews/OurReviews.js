import React from "react";
import styled from "styled-components";
import { MdStar, MdStarHalf } from "react-icons/md";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import FacebookIcon from "../../assets/images/BB-Review-Images/fb.png";
import HomeAdvisorIcon from "../../assets/images/BB-Review-Images/ha.png";
import HouzzIcon from "../../assets/images/BB-Review-Images/hz.png";
import YelpIcon from "../../assets/images/BB-Review-Images/yelp.png";

const ReviewIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem 5rem;
`;

const ReviewIconsBox = styled.div`
  ${"" /* max-width: 40%; */}
  ${"" /* margin: 0 auto; */}
  padding: 1rem 2rem;
`;

const ReviewIconImg = styled.img`
  max-width: 80%;
`;

const ReviewStarsContainer = styled.div`
  font-size: 1rem;
  color: #9caa49;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OurReviews = () => (
  <ReviewIconsContainer>
    <Container>
      <Row className="justify-content-center">
        <ReviewIconsBox>
          <ReviewIconImg src={FacebookIcon} alt="Facebook" />
          <ReviewStarsContainer>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </ReviewStarsContainer>
        </ReviewIconsBox>
        <ReviewIconsBox>
          <ReviewIconImg src={YelpIcon} alt="Yelp" />
          <ReviewStarsContainer>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </ReviewStarsContainer>
        </ReviewIconsBox>
        <ReviewIconsBox>
          <ReviewIconImg src={HouzzIcon} alt="Houzz" />
          <ReviewStarsContainer>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </ReviewStarsContainer>
        </ReviewIconsBox>
        <ReviewIconsBox>
          <ReviewIconImg src={HomeAdvisorIcon} alt="Home Advisor" />
          <ReviewStarsContainer>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </ReviewStarsContainer>
        </ReviewIconsBox>
      </Row>
    </Container>
  </ReviewIconsContainer>
);

export default OurReviews;
