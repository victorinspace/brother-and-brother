import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import HeaderLogo from "../../images/logo.jpg";

const Container = styled.header`
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 150px;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  z-index: 10;
`;

const LogoImage = styled.img`
  max-width: 180px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  max-width: 800px;
`;

const LinkText = styled.h4`
  color: #fff;
  margin-right: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  ${"" /* padding-bottom: 2px; */}

  :hover {
    color: #9caa49;
    text-decoration: none;
    ${"" /* border-bottom: 2px solid #fff; */}
  }
`;

const PhoneButtonContainer = styled.button`
  background: #ff5c26;
  color: #fff;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  border: none;

  :hover {
    backgound-color: #e04410;
    color: #000;
    cursor: pointer;
  }
`;

const TestHeader = ({ data }) => (
  <Container>
    {/* <LogoImage src={HeaderLogo} /> */}

    {/* <Img fluid={data.imageOne.childImageSharp.fluid} alt="logo" /> */}
    <LinkContainer>
      <LinkText>
        <StyledLink to="/">Home</StyledLink>
      </LinkText>
      <LinkText>
        <StyledLink to="/about">About</StyledLink>
      </LinkText>
      <LinkText>
        <StyledLink to="/services">Services</StyledLink>
      </LinkText>
      <LinkText>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </LinkText>
      <LinkText>
        <StyledLink to="/reviews">Reviews</StyledLink>
      </LinkText>
      <LinkText>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinkText>
    </LinkContainer>
    <Button
      style={{ backgroundColor: `#9caa49`, border: `none`, borderRadius: `0` }}
      href="tel:+1+888+412+2632"
      type="button"
      size="lg"
    >
      <FaPhone />
      {` `}
      888.412.2632
    </Button>
  </Container>
);

TestHeader.propTypes = {
  siteTitle: PropTypes.string
};

TestHeader.defaultProps = {
  siteTitle: ``
};

export default TestHeader;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "brother-brother-logo-XS.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
