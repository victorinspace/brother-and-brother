import React from "react";
import styled from "styled-components";
import { MdStar, MdStarHalf } from "react-icons/md";

import FacebookIcon from "../../assets/images/BB-Review-Images/fb.png";
import HomeAdvisorIcon from "../../assets/images/BB-Review-Images/ha.png";
import HouzzIcon from "../../assets/images/BB-Review-Images/hz.png";
import YelpIcon from "../../assets/images/BB-Review-Images/yelp.png";

const ReviewIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
`;

const ReviewIconsBox = styled.div`
  padding: 3rem;
`;

const ReviewStarsContainer = styled.div`
  font-size: 1.3rem;
  color: #9caa49;
`;

const OurReviews = () => (
  <ReviewIconsContainer>
    <ReviewIconsBox>
      <img src={FacebookIcon} alt="Facebook" />
      <ReviewStarsContainer>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </ReviewStarsContainer>
    </ReviewIconsBox>
    <ReviewIconsBox>
      <img src={YelpIcon} alt="Yelp" />
      <ReviewStarsContainer>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStarHalf />
      </ReviewStarsContainer>
    </ReviewIconsBox>
    <ReviewIconsBox>
      <img src={HouzzIcon} alt="Houzz" />
      <ReviewStarsContainer>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </ReviewStarsContainer>
    </ReviewIconsBox>
    <ReviewIconsBox>
      <img src={HomeAdvisorIcon} alt="Home Advisor" />
      <ReviewStarsContainer>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStarHalf />
      </ReviewStarsContainer>
    </ReviewIconsBox>
  </ReviewIconsContainer>
);

export default OurReviews;
