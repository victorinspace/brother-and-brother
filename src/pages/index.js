import React from "react";
import Layout from "../components/layout";
import Hero from "../components/HeroComponent/HeroComponent.js";
import styled from "styled-components";
import SEO from "../components/seo";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import VideoComponent from "../components/video-component/VideoComponent.js";

import RoomAddition from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

import CarouselComponent from "../components/carousel/CarouselComponent";
// import Awards from "../components/awards/Awards";

import oneYear from "../assets/images/awards/1year.png";
import fiftyReviews from "../assets/images/awards/50reviews.png";
import awardTwo from "../assets/images/awards/badge_47_8@2x.png";
import awardThree from "../assets/images/awards/badge_29_9@2x.png";
import awardFour from "../assets/images/awards/badge_44_8@2x.png";
import awardFive from "../assets/images/awards/badge_47_8@2x.png";
import homeAdvisor2017 from "../assets/images/awards/boha-2017.png";
import homeAdvisor2018 from "../assets/images/awards/boha-2018.png";
import elite from "../assets/images/awards/elite.png";
import buildZoom from "../assets/images/awards/t10pl2.png";
import topRated from "../assets/images/awards/toprated.png";
import yelp from "../assets/images/awards/yelp.png";

// import HomeVideo from "../images/mp4/BBSlide-Large.mov";
// import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
// import YouTube from "react-youtube";

// import MainHero from "../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";

// import ServicesHero from "../assets/images/project-photos/BATHROOM-lon-Minier/image-13.jpg";

const AwardsContainerContainer = styled.section`
  max-width: 90vw;
  margin: 95vh auto 0;
  padding: 3rem 0;
  display: block;
`;

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
  max-width: 10rem;
  padding: 0.66rem;
`;

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

// const VideoBackground = styled.div`
//   background: #000;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   z-index: -99;
//   &::after {
//     display: block;
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     background: rgba(0, 0, 0, 0.75);
//   }
// `;

// const VideoForeground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;

//   @media (min-aspect-ratio: 16/9) {
//     height: 300%;
//     top: -100%;
//   }

//   @media (max-aspect-ratio: 16/9) {
//     width: 300%;
//     left: -100%;
//   }
// `;

// _onReady(event) {
//   // access to player in all event handlers via event.target
//   // event.target.mute();
// }

// _onEnd(event) {
//   event.target.playVideo();
// }

const videoOptions = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

const IndexPage = () => (
  <Layout>
    <div style={{ backgroundColor: `white` }}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <Hero imgSrc={MainHero} pageTitle="Brother & Brother Builders" /> */}
      {/* <CarouselComponent /> */}

      <VideoComponent />

      {/* <div style={{ width: `660`, height: `auto` }}>
      <ResponsiveEmbed aspect="a16by9">
        <embed src="https://www.youtube-nocookie.com/embed/DOxVWYulV-s?controls=0" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/DOxVWYulV-s?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </ResponsiveEmbed>
    </div> */}

      {/* <VideoBackground>
      <VideoForeground>
        <YouTube
          videoId="Z6FPJOgfCkc"
          opts={autoplay: `1`,
      controls: `0`,
      rel: 0,
      showinfo: 0}
          className="video-iframe"
          // onReady={this._onReady}
          // onEnd={this._onEnd}
        />
      </VideoForeground>
    </VideoBackground> */}

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
      <AwardsContainerContainer>
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
      </AwardsContainerContainer>
      {/* <Hero imgSrc={ServicesHero} /> */}
      <Wrapper>
        <Container>
          <Row>
            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={FullRemodeling} alt="Full Remodeling" />
              <Card.Body>
                <Card.Title>Full Remodeling</Card.Title>
                <Card.Text>
                  Whether it’s a new addition to the family or desired expansion Brother and Brother
                  Builders has the experience to guide through every step of the process.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={RoomAddition} alt="Room Additions" />
              <Card.Body>
                <Card.Title>Room Additions</Card.Title>
                <Card.Text>
                  Whether it’s a new addition to the family or desired expansion Brother and Brother
                  Builders has the experience to guide through every step of the process.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={Kitchens} alt="Kitchens" />
              <Card.Body>
                <Card.Title>Kitchens</Card.Title>
                <Card.Text>
                  Brother and Brother Builders understands that the kitchen is the heart of the
                  home. It is where memories are created. The design requires extensive planning and
                  is one of our specialties.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="light" style={{ width: `25.5rem`, margin: `0.45rem` }}>
              <Card.Img variant="top" src={Bathroom} alt="Bathroom" />
              <Card.Body>
                <Card.Title>Bathroom</Card.Title>
                <Card.Text>
                  Brother and Brother Builders will transform your old ordinary bathroom to a custom
                  spa. From tile to fixtures we will help you make the right choices with
                  exceptional design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Wrapper>
    </div>
  </Layout>
);

export default IndexPage;
