import React from "react";
import Layout from "../components/layout";
import Hero from "../components/HeroComponent/HeroComponent.js";
import styled from "styled-components";
import SEO from "../components/seo";
import "bootstrap/dist/css/bootstrap.css";

// Component Imports
import VideoComponent from "../components/video-component/VideoComponent.js";
import OurProjects from "../components/OurProjects/OurProjects.js";
import OurServices from "../components/OurServices/OurServices.js";
import OurAwards from "../components/OurAwards/OurAwards.js";
import OurReviews from "../components/OurReviews/OurReviews.js";

const IndexPage = () => (
  <Layout>
    <div style={{ backgroundColor: `white` }}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <VideoComponent className="video-component" />
      <OurProjects />
      <OurServices />
      <OurAwards />
      <OurReviews />
    </div>
  </Layout>
);

export default IndexPage;
