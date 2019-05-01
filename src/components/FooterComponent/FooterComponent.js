import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";

const Container = styled.footer`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  padding: 60px 0;
  background-image: linear-gradient(to top, transparent, #eee);
`;

const CopyrightWrapper = styled.div`
  padding: 5px;
`;

const SocialWrapper = styled.div`
  padding: 5px;
  max-width: 300px;
`;

const SocialLink = styled.a`
  padding: 10px 20px;
  font-size: 2em;
  color: #9caa49;
  :hover {
    color: #eee;
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
  color: rgba(0, 0, 0, 0.5);
`;

const FooterComponent = ({ siteTitle }) => (
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
    </AddressContainer>

    <CopyrightWrapper>
      © 2017-{new Date().getFullYear()} |{` `}
      <a style={{ color: `#9caa49` }} href="http://www.brotherandbrotherbuilders.com/">
        Brother and Brother Builders
      </a>
    </CopyrightWrapper>
  </Container>
);

FooterComponent.propTypes = {
  siteTitle: PropTypes.string
};

FooterComponent.defaultProps = {
  siteTitle: ``
};

export default FooterComponent;
