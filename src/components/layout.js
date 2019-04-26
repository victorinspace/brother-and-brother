/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

// import Header from "./header/header";
import TestHeader from "./header/TestHeader.js";
import Footer from "./FooterComponent/FooterComponent.js";
import styled from "styled-components";
import "./layout.css";

const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 100%;
  paddingtop: 0;
`;

const Content = styled.main`
  ${"" /* padding-top: 100px; */}

  ${"" /* @media screen and (max-width: 849px) {
    padding-top: 150px;
  }

  @media screen and (max-width: 693px) {
    padding-top: 220px;
  }

  @media screen and (max-width: 552px) {
    padding-top: 275px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 255px;
  } */}
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <TestHeader />
        <Wrapper>
          <Content>{children}</Content>
          <Footer />
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
