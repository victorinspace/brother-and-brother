import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { FaPhone, FaHouzz, FaFacebookSquare, FaYelp, FaInstagram } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import HeaderLogo from "../../assets/images/logo.png";
import HomeAdvisor from "../../assets/images/home_thumbnail.svg";

const LogoImage = styled.img`
  max-width: 9rem;
  margin: 0;
`;

const SocialLink = styled.a`
  padding: 1px;
  font-size: 1em;
  color: #000;
  :hover {
    color: #f7931f;
  }
`;

const MenuComponent = ({ data }) => (
  <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
    <Navbar.Brand href="/">
      <LogoImage src={HeaderLogo} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        {/* <Nav.Link href="/reviews">Reviews</Nav.Link> */}
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <SocialLink href="https://www.houzz.com/pro/brotherandbrother/__public" target="_blank">
        <Button
          style={{
            backgroundColor: `white`,
            color: `rgba(0, 0, 0, 0.5)`,
            border: `1px solid rgba(0, 0, 0, 0.5)`,
            margin: `0.15rem`
          }}
        >
          <FaHouzz />
        </Button>
      </SocialLink>
      <SocialLink href="https://www.facebook.com/brotherandbrotherbuilders" target="_blank">
        <Button
          style={{
            backgroundColor: `white`,
            color: `rgba(0, 0, 0, 0.5)`,
            border: `1px solid rgba(0, 0, 0, 0.5)`,
            margin: `0.15rem`
          }}
        >
          <FaFacebookSquare />
        </Button>
      </SocialLink>
      <SocialLink
        href="https://www.yelp.com/biz/brother-and-brother-builders-san-jose-3"
        target="_blank"
      >
        <Button
          style={{
            backgroundColor: `white`,
            color: `rgba(0, 0, 0, 0.5)`,
            border: `1px solid rgba(0, 0, 0, 0.5)`,
            margin: `0.15rem`
          }}
        >
          <FaYelp />
        </Button>
      </SocialLink>

      <SocialLink href="https://www.instagram.com/b_b_builders/" target="_blank">
        <Button
          style={{
            backgroundColor: `white`,
            color: `rgba(0, 0, 0, 0.5)`,
            border: `1px solid rgba(0, 0, 0, 0.5)`,
            margin: `0.15rem`
          }}
        >
          <FaInstagram />
        </Button>
      </SocialLink>

      <SocialLink
        style={{
          padding: `0`
        }}
        href="https://www.homeadvisor.com/rated.BrotherandBrother.54666823.html"
        target="_blank"
      >
        <Button
          style={{
            backgroundColor: `white`,
            border: `1px solid rgba(0, 0, 0, 0.5)`,
            margin: `0.15rem`,
            maxWidth: `42px`,
            maxHeight: `38px`,
            padding: `0.5rem`,
            borderRadius: `4px`,
            display: `inline-block`,
            overlay: `hidden`
          }}
        >
          <img style={{ width: `100%` }} src={HomeAdvisor} alt="HomeAdvisor" />
        </Button>
      </SocialLink>
    </Navbar.Collapse>

    <a href="tel:+1+888+412+2632">
      <Button
        style={{
          backgroundColor: `#9caa49`,
          border: `none`,
          margin: `0.15rem`
        }}
      >
        <FaPhone />
        {` `}
        888.412.2632
      </Button>
    </a>
    <a href="/contact">
      <Button
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
          border: `none`,
          margin: `0.15rem`
        }}
      >
        <FaCalendarAlt />
        {` `}
        Booking
      </Button>
    </a>
  </Navbar>
);

MenuComponent.propTypes = {
  siteTitle: PropTypes.string
};

MenuComponent.defaultProps = {
  siteTitle: ``
};

export default MenuComponent;
