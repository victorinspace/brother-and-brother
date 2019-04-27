import React from "react";
import LazyHero from "react-lazy-hero";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5em;
  color: #000;
`;

const SubTitle = styled.h2`
  font-size: 3em;
  color: #000;
`;

const HeroComponent = props => (
  <div style={{ paddingTop: `115px` }}>
    <LazyHero imageSrc={props.imgSrc} parallaxOffset={100} minHeight={`80vh`} color={`#ccc`}>
      <Title>{props.pageTitle}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </LazyHero>

    {/* ... */}
  </div>
);

export default HeroComponent;
