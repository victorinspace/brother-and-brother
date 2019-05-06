import React from "react";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

// Hero Image
import ServicesHero from "../assets/images/project-photos/BATHROOM-lon-Minier/image-13.jpg";

// Full Remodeling Carousl Items
import FullOne from "../assets/images/project-photos/FULL-The-Silkwood-Project/K1_12863.jpg";
import FullTwo from "../assets/images/project-photos/FULL-The-Silkwood-Project/K1_12980.jpg";
import FullThree from "../assets/images/project-photos/FULL-The-Silkwood-Project/K1_13034.jpg";
import FullFour from "../assets/images/project-photos/FULL-The-Silkwood-Project/K1_12958.jpg";

// Additions Carousel Items
import AdditionsOne from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14712.jpg";
import AdditionsTwo from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import AdditionsThree from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14747.jpg";
import AdditionsFour from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14722-HDR.jpg";

// Kitchens Carousel Items
import KitchensOne from "../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import KitchensTwo from "../assets/images/project-photos/KITCHEN-The-Arezzo-Project/K1_15428-1.jpg";
import KitchensThree from "../assets/images/project-photos/KITCHEN-The-Arezzo-Project/K1_15511-2.jpg";
import KitchensFour from "../assets/images/project-photos/Kitchen-&-Bathrooms_The-Castano-Project/K1_19593.jpg";

// Bathroom Carousel Items
import BathroomOne from "../assets/images/project-photos/BATHROOM-The-Beaumont-Project/SF_BTH-10 copy.jpg";
import BathroomTwo from "../assets/images/project-photos/BATHROOM-The-Arezzo-Project/K1_14680.jpg";
import BathroomThree from "../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";
import BathroomFour from "../assets/images/project-photos/BATHROOM-The-Gentrytown-Project/IMG_92960-sm.jpg";

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  max-width: 450px;
  margin: 1rem 1rem;
`;

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero imgSrc={ServicesHero} pageTitle="Services" />
    <Wrapper>
      <Container>
        <Row>
          <CategoryContainer>
            <Card border="light">
              <Carousel>
                <Carousel.Item>
                  <img src={FullOne} alt="full remodel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={FullTwo} alt="full remodel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={FullThree} alt="full remodel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={FullFour} alt="full remodel" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Full Remodeling</Card.Title>
                <Card.Text>
                  Whether it’s a new addition to the family or desired expansion Brother and Brother
                  Builders has the experience to guide through every step of the process.
                </Card.Text>
              </Card.Body>
            </Card>
          </CategoryContainer>

          <CategoryContainer>
            <Card border="light">
              <Carousel>
                <Carousel.Item>
                  <img src={AdditionsOne} alt="room additions" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AdditionsTwo} alt="room additions" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AdditionsThree} alt="room additions" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AdditionsFour} alt="room additions" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Room Additions</Card.Title>
                <Card.Text>
                  Whether it’s a new addition to the family or desired expansion Brother and Brother
                  Builders has the experience to guide through every step of the process.
                </Card.Text>
              </Card.Body>
            </Card>
          </CategoryContainer>
        </Row>

        <Row>
          <CategoryContainer>
            <Card border="light">
              <Carousel>
                <Carousel.Item>
                  <img src={KitchensOne} alt="kitchens" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={KitchensTwo} alt="kitchens" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={KitchensThree} alt="kitchens" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={KitchensFour} alt="kitchens" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Kitchens</Card.Title>
                <Card.Text>
                  Brother and Brother Builders understands that the kitchen is the heart of the
                  home. It is where memories are created. The design requires extensive planning and
                  is one of our specialties.
                </Card.Text>
              </Card.Body>
            </Card>
          </CategoryContainer>

          <CategoryContainer>
            <Card border="light">
              <Carousel>
                <Carousel.Item>
                  <img src={BathroomOne} alt="bathrooms" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={BathroomTwo} alt="bathrooms" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={BathroomThree} alt="bathrooms" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={BathroomFour} alt="bathrooms" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Bathroom</Card.Title>
                <Card.Text>
                  Brother and Brother Builders will transform your old ordinary bathroom to a custom
                  spa. From tile to fixtures we will help you make the right choices with
                  exceptional design.
                </Card.Text>
              </Card.Body>
            </Card>
          </CategoryContainer>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default Services;
