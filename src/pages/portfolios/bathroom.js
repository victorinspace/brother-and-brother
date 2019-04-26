import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SEO from "../../components/seo";
// import styled from "styled-components";

import Hero from "../../components/hero/hero";
import Layout from "../../components/layout";
import PortfolioHero from "../../assets/images/project-photos/B&A-KITCHEN-Eckley-Project/WCKitchenandFamilyRoom-14.jpg";

export default class Bathroom extends Component {
  static propTypes = {
    bathroomImages: PropTypes.array.isRequired
  };

  render() {
    const { bathroomImages } = this.props;
    return (
      <Layout>
        <SEO title="Bathroom" />
        <Hero imgSrc={PortfolioHero} pageTitle="Bathroom" />
      </Layout>
    );
  }
}
