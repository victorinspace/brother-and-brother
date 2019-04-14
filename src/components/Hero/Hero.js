import React from "react"
import LazyHero from "react-lazy-hero"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 5em;
  color: #fff;
`

const SubTitle = styled.h2`
  font-size: 3em;
  color: #fff;
`

const Hero = props => (
  <div>
    <LazyHero
      imageSrc="https://unsplash.it/2000/1000/?random"
      parallaxOffset={100}
      minHeight={`75vh`}
      color={`#000`}
    >
      <Title>{props.pageTitle}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </LazyHero>

    {/* ... */}
  </div>
)

export default Hero
