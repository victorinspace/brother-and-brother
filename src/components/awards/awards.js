import React from "react";
import styled from "styled-components";

import oneYear from "../../images/awards/1year.png";
import fiftyReviews from "../../images/awards/50reviews.png";
import awardOne from "../../images/awards/yelp.png";
import awardTwo from "../../images/awards/badge_47_8@2x.png";
import awardThree from "../../images/awards/badge_29_9@2x.png";
import awardFour from "../../images/awards/badge_44_8@2x.png";
import awardFive from "../../images/awards/badge_47_8@2x.png";

const AwardsContainer = styled.section`
  margin: 0 auto;
  padding: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AwardImage = styled.img`
  max-width: 100px;
`;

const Awards = () => (
  <AwardsContainer>
    <Container>
      <AwardImage src={oneYear} alt="award" />
      <AwardImage src={fiftyReviews} alt="award" />
      <AwardImage src={awardOne} alt="award" />
      <AwardImage src={awardTwo} alt="award" />
      <AwardImage src={awardThree} alt="award" />
      <AwardImage src={awardFour} alt="award" />
      <AwardImage src={awardFive} alt="award" />
    </Container>
  </AwardsContainer>
);

export default Awards;
