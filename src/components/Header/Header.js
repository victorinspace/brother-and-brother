import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { FaPhone } from "react-icons/fa";

const Container = styled.header`
  background: black;
  marginbottom: 1.45rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  border: 2px solid #fff;
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`;

const Contact = styled.div`
  border: none;
  margin: 0;
`;

const Phone = styled.button`
  background: #ff5c26;
  color: #fff;
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
  border: none;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <LogoContainer>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        B&B Logo
      </Link>
    </LogoContainer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          About
        </Link>
        {` `}
        <Link
          to="/services"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          Services
        </Link>
        {` `}
        <Link
          to="/portfolio"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          Portfolio
        </Link>
        {` `}
        <Link
          to="/reviews"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          Reviews
        </Link>
        {` `}
        <Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: `10px`
          }}
        >
          Contact
        </Link>
      </h3>
    </div>
    <Contact>
      <Phone>
        <FaPhone />
        {` `}
        888.412.2632
      </Phone>
    </Contact>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
