import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StickyContainer, Sticky } from "react-sticky";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Container = styled.header`
  background: black;
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  z-index: 10;
`;

const LinkContainer = styled.div`
  border: 2px solid red;
`;

const LinkText = styled.h3`
  color: white;
  text-decoration: none;
`;

const PhoneButtonContainer = styled.button`
  background: #ff5c26;
  color: #fff;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  border: none;

  :hover {
    backgound: #e04410;
    color: #000;
    cursor: pointer;
  }
`;

const TestHeader = ({ siteTitle }) => (
  <StickyContainer>
    <Sticky>
      {({ style, isSticky }) => (
        <Container style={style}>
          <LinkContainer>
            <LinkText>
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Services</Link>
              <Link to="/">Portfolio</Link>
              <Link to="/">Reviews</Link>
              <Link to="/">Contact</Link>
            </LinkText>
          </LinkContainer>
          <PhoneButtonContainer>
            <FaPhone />
            {` `}
            888.412.2632
          </PhoneButtonContainer>
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
