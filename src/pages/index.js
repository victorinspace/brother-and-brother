import React from "react";
import Layout from "../components/layout";
import Hero from "../components/HeroComponent/HeroComponent.js";
import styled from "styled-components";
import SEO from "../components/seo";
import Reviews from "./ReviewsImg";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { MdStar, MdStarHalf } from "react-icons/md";
import { FaAward, FaHome, FaBriefcase } from "react-icons/fa";

// Component Imports
import VideoComponent from "../components/video-component/VideoComponent.js";
import OurProjects from "../components/OurProjects/OurProjects.js";
import OurServices from "../components/OurServices/OurServices.js";
import OurAwards from "../components/OurAwards/OurAwards.js";
import OurReviews from "../components/OurReviews/OurReviews.js";

import RoomAddition from "../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import FullRemodeling from "../assets/images/project-photos/BATHROOM-The-Parkwell-Project/K1_13828-HDR.jpg";
import Kitchens from "../assets/images/project-photos/KITCHEN-BATHROOM-The-Nelson-Project/K1_19487.jpg";
import Bathroom from "../assets/images/project-photos/BATHROOM-Castro-Valley/1Y6A1829.jpg";

// import Awards from "../components/awards/Awards";

import oneYear from "../assets/images/awards/1year.png";
import fiftyReviews from "../assets/images/awards/50reviews.png";
import awardTwo from "../assets/images/awards/badge_47_8@2x.png";
import awardFour from "../assets/images/awards/badge_44_8@2x.png";
import awardFive from "../assets/images/awards/badge_47_8@2x.png";
import homeAdvisor2017 from "../assets/images/awards/boha-2017.png";
import homeAdvisor2018 from "../assets/images/awards/boha-2018.png";
import elite from "../assets/images/awards/elite.png";
import buildZoom from "../assets/images/awards/t10pl2.png";
import topRated from "../assets/images/awards/toprated.png";
import yelp from "../assets/images/awards/yelp.png";

import FacebookIcon from "../assets/images/BB-Review-Images/fb.png";
import HomeAdvisorIcon from "../assets/images/BB-Review-Images/ha.png";
import HouzzIcon from "../assets/images/BB-Review-Images/hz.png";
import YelpIcon from "../assets/images/BB-Review-Images/yelp.png";

// import MainHero from "../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";

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
