import React from "react";
import styled from "styled-components";

import oneYear from "../../assets/images/awards/1year.png";
import fiftyReviews from "../../assets/images/awards/50reviews.png";
import awardTwo from "../../assets/images/awards/badge_47_8@2x.png";
import awardThree from "../../assets/images/awards/badge_29_9@2x.png";
import awardFour from "../../assets/images/awards/badge_44_8@2x.png";
import awardFive from "../../assets/images/awards/badge_47_8@2x.png";
import homeAdvisor2017 from "../../assets/images/awards/boha-2017.png";
import homeAdvisor2018 from "../../assets/images/awards/boha-2018.png";
import elite from "../../assets/images/awards/elite.png";
import buildZoom from "../../assets/images/awards/t10pl2.png";
import topRated from "../../assets/images/awards/toprated.png";
import yelp from "../../assets/images/awards/yelp.png";

const AwardsContainer = styled.section`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AwardImage = styled.img`
  max-width: 100px;
  padding: 0.66rem;
`;

const Awards = () => (
  <AwardsContainer>
    <AwardImage src={oneYear} alt="award" />
    <AwardImage src={fiftyReviews} alt="award" />
    <AwardImage src={awardTwo} alt="award" />
    <AwardImage src={awardThree} alt="award" />
    <AwardImage src={awardFour} alt="award" />
    <AwardImage src={awardFive} alt="award" />
    <AwardImage src={homeAdvisor2017} alt="award" />
    <AwardImage src={homeAdvisor2018} alt="award" />
    <AwardImage src={elite} alt="award" />
    <AwardImage src={buildZoom} alt="award" />
    <AwardImage src={topRated} alt="award" />
    <AwardImage src={elite} alt="award" />
    <AwardImage src={yelp} alt="award" />
  </AwardsContainer>
);

export default Awards;
