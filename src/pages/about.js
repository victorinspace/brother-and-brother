import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Image Imports
import AboutHero from "../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";
import Downtown from "../assets/images/company-placeholder/downtown.jpg";
import Timeline from "../assets/images/BB-Timeline-Web.png";

const AboutWrapper = styled.section`
  max-width: 800px;
  margin: 50px auto 0;
  padding: 1rem;
`;

const VisiontStatement = styled.h3`
  font-style: italic;
`;

const ImageAndHistory = styled.section`
  ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const DowntownImage = styled.img`
  max-width: 90vw;
  padding: 0 1rem 1rem 0;
`;

const About = () => (
  <Layout>
    <SEO title="About" />

    <Container style={{ paddingTop: `120px` }}>
      <div style={{ paddingBottom: `2rem` }}>
        <VisiontStatement className="text-center h3-responsive">
          “Home is where our story begins”
        </VisiontStatement>
      </div>

      <Row>
        <Col>
          <DowntownImage src={Downtown} alt="Downtown San Jose" />
        </Col>
        <Col>
          <p className="lead">
            Brother and Brother Builders is a licensed, bonded and insured remodeling and building
            company. We serve the Northern California area including the east bay, south bay as well
            as the peninsula. We are family owned and have been in business for over 10 years. We
            specialize in additions, kitchen and bathroom remodeling. Our comprehensive experience
            will provide you with exceptional results and ensured satisfaction. We are passionate
            about instilling Honesty and integrity into team, and projecting that onto you. Our team
            looks forward to working with you on your project and welcoming you into the family.
          </p>
        </Col>
      </Row>

      <div>
        <DowntownImage
          style={{ maxWidth: `100%`, padding: `2rem 0` }}
          src={Timeline}
          alt="timeline"
        />
      </div>
    </Container>
  </Layout>
);

export default About;
