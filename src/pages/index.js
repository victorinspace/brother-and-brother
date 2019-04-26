import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import "bootstrap/dist/css/bootstrap.css";
import VideoCover from "react-video-cover";

import CarouselComponent from "../components/carousel/CarouselComponent";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

import Awards from "../components/awards/Awards";

// import HomeVideo from "../images/mp4/BBSlide-Large.mov";

const AwardsContainer = styled.section`
  max-width: 90vw;
  margin: 0 auto;
  padding: 3rem 0;
  display: block;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <CarouselComponent />

    {/* <div
      style={{
        width: "300px",
        height: "300px",
        overflow: "hidden"
      }}
    >
      <VideoCover videoOptions={{ src: `../images/mp4/BBSlide-Large.mp4` }} />
    </div>
    <Hero imgSrc={AboutHero} pageTitle="Who we are" subTitle="What we do best" /> */}

    {/* <Hero imgSrc={HomeVideo} pageTitle="Who we are" subTitle="What we do best" /> */}

    <AwardsContainer>
      <Awards />
    </AwardsContainer>
  </Layout>
);

export default IndexPage;
