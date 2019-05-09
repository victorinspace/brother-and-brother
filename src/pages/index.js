import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Imported Packages
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";

// Component Imports
import VideoHero from "../components/video-component/VideoHero.js";
import OurProjects from "../components/OurProjects/OurProjects.js";
import OurServices from "../components/OurServices/OurServices.js";
import OurAwards from "../components/OurAwards/OurAwards.js";
import OurReviews from "../components/OurReviews/OurReviews.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`remodeling`, `building`, `home`]} />

    <section style={{ backgroundColor: ``, padding: `1rem 0` }}>
      <OurProjects />
    </section>

    <section style={{ backgroundColor: `#dfdfdf`, padding: `5rem 0` }}>
      <OurAwards />
    </section>

    <section style={{ backgroundColor: `#9caa49`, padding: `5rem 1rem` }}>
      <OurServices />
    </section>

    <section style={{ padding: `5rem 1rem` }}>
      <OurReviews />
    </section>
  </Layout>
);

export default IndexPage;
