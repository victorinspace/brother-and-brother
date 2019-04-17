import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StickyContainer, Sticky } from "react-sticky";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import HeaderLogo from "../../images/logo.jpg";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

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

const LinkText = styled.h3`
  color: #fff;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  color: aqua;
  border-bottom: 2px solid #fff;
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

const TestHeader = props => (
  <StickyContainer>
    <Sticky>
      {({ style }) => (
        <Container style={style}>
          {/* <LogoImage src={HeaderLogo} /> */}
          <StaticQuery
            query={graphql`
              query {
                imageOne: file(relativePath: { eq: "brother-brother-logo-XS.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => <Img fluid={data.imageOne.childImageSharp.fluid} />}
          />
          <LinkContainer>
            <LinkText>
              <StyledLink to="/">Home</StyledLink>
            </LinkText>
            <LinkText>
              <Link to="/about">About</Link>
            </LinkText>
            <LinkText>
              <Link to="/services">Services</Link>
            </LinkText>
            <LinkText />
            <LinkText>
              <Link to="/portfolio">Portfolio</Link>
            </LinkText>
            <LinkText>
              <Link to="/reviews">Reviews</Link>
            </LinkText>
            <LinkText>
              <Link to="/contact">Contact</Link>
            </LinkText>
          </LinkContainer>
          <Button
            style={{ backgroundColor: `#ff5c26` }}
            href="tel:+1+888+412+2632"
            type="button"
            size="lg"
          >
            <FaPhone />
            {` `}
            888.412.2632
          </Button>
        </Container>
      )}
    </Sticky>
  </StickyContainer>
);

TestHeader.propTypes = {
  siteTitle: PropTypes.string
};

TestHeader.defaultProps = {
  siteTitle: ``
};

export default TestHeader;
