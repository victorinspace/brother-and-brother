import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SEO from "../../components/seo";
// import styled from "styled-components";

import Hero from "../../components/hero/hero";
import Layout from "../../components/layout";
import PortfolioHero from "../../images/project-photos/Eckley-project/WCKitchenandFamilyRoom-14.jpg";

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

        <div>
          {bathroomImages.map(image => (
            <Img
              key={image.node.childImageSharp.fluid.src}
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </div>
      </Layout>
    );
  }
}
