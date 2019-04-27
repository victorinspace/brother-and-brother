import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import HeaderLogo from "../../assets/images/logo.png";

const LogoImage = styled.img`
  max-width: 140px;
  margin: 0;
`;

const MenuComponent = ({ data }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
        <Nav.Link href="/reviews">Reviews</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Nav>
      <a href="tel:+1+888+412+2632">
        <Button style={{ backgroundColor: `#9caa49`, border: `none` }}>
          <FaPhone />
          {` `}
          888.412.2632
        </Button>
      </a>
    </Nav>
  </Navbar>
);

MenuComponent.propTypes = {
  siteTitle: PropTypes.string
};

MenuComponent.defaultProps = {
  siteTitle: ``
};

export default MenuComponent;
