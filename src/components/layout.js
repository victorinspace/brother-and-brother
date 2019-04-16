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
import TestHeader from "./header/TestHeader";
import Footer from "./footer/footer";
import styled from "styled-components";
import "./layout.css";

const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 100%;
  paddingtop: 0;
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
          <main>{children}</main>
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
