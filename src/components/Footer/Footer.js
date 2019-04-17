import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";

const Container = styled.footer`
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  padding: 60px 0;
  background-image: linear-gradient(to top, transparent, #0c0c0c);
`;

const CopyrightWrapper = styled.div`
  padding: 5px;
`;

const SocialWrapper = styled.div`
  padding: 5px;
  max-width: 300px;
`;

const SocialLink = styled.a`
  padding: 10px 15px;
  font-size: 2em;

  :hover {
    color: #9caa49;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 10px;
  margin: 0 20px;
`;

const AddressHeader = styled.h3`
  color: #ccc;
`;

const Footer = ({ siteTitle }) => (
  <Container>
    <SocialWrapper>
      <SocialLink href="https://www.facebook.com/brotherandbrotherbuilders">
        <FaFacebookSquare />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/b_b_builders/">
        <FaInstagram />
      </SocialLink>
    </SocialWrapper>

    <AddressContainer>
      <Address>
        <AddressHeader>SAN JOSE</AddressHeader>
        <p>1630 Oakland Rd #A211 San Jose, CA 95131 </p>
      </Address>
      <Address>
        <AddressHeader>WALNUT CREEK</AddressHeader>
        <p>1295 Boulevard Way #J Walnut Creek, CA 94595</p>
      </Address>
    </AddressContainer>

    <CopyrightWrapper>
      © 2017-{new Date().getFullYear()} |{` `}
      <a href="http://www.brotherandbrotherbuilders.com/">Brother and Brother Builders</a>
    </CopyrightWrapper>
  </Container>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
