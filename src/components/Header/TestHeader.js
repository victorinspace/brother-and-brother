import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ResponsiveMenu from "react-responsive-navbar";

import HeaderLogo from "../../images/logo.jpg";

const Wrapper = styled.header`
  background: #2c2c2c;
  padding: 0.4rem 1.0875rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  width: 100%;
  ${"" /* border: 2px solid green; */}

  position: fixed;
  z-index: 10;
`;

const LogoImageContainer = styled.div`
  ${"" /* border: 2px solid red; */}
  width: 300px;
`;

const LogoImage = styled.img`
  max-width: 140px;
  margin: 0;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  ${"" /* border: 2px solid blue; */}
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5em;
  padding: 0.3rem 0;
`;

const MenuListItem = styled.li`
  color: #fff;
  padding: 0.7rem;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  color: #fff;

  :hover {
    color: #9caa49;
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  ${"" /* border: 2px solid yellow; */}
  width: 300px;
`;

const TestHeader = ({ data }) => (
  <Wrapper>
    <LogoImageContainer>
      <LogoImage src={HeaderLogo} />
    </LogoImageContainer>

    <MenuContainer>
      <Menu>
        {/* <MenuListItem>
          <StyledLink to="/">Home</StyledLink>
        </MenuListItem> */}
        <MenuListItem>
          <StyledLink to="/about">About</StyledLink>
        </MenuListItem>
        <MenuListItem>
          <StyledLink to="/services">Services</StyledLink>
        </MenuListItem>
        <MenuListItem>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </MenuListItem>
        <MenuListItem>
          <StyledLink to="/reviews">Reviews</StyledLink>
        </MenuListItem>
        <MenuListItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </MenuListItem>
      </Menu>
    </MenuContainer>

    <ButtonContainer>
      <button
        style={{
          backgroundColor: `#9caa49`,
          color: `white`,
          padding: `0.55rem`,
          border: `none`,
          borderRadius: `0`
        }}
        href="tel:+1+888+412+2632"
        type="button"
        size="lg"
      >
        <FaPhone />
        {` `}
        888.412.2632
      </button>
    </ButtonContainer>
  </Wrapper>
);

TestHeader.propTypes = {
  siteTitle: PropTypes.string
};

TestHeader.defaultProps = {
  siteTitle: ``
};

export default TestHeader;
