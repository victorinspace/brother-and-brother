import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaFacebookSquare, FaInstagram, FaRegBuilding } from "react-icons/fa";
import BuildingImage from "../../assets/images/company-placeholder/downtown.jpg";

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

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const BuildingImg = styled.img`
  max-width: 20%;
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
    <AddressContainer>
      <BuildingImg src={BuildingImage} alt="Building" />
      <Address>
        <AddressHeader>SAN JOSE</AddressHeader>
        <p>1630 Oakland Rd #A211 San Jose, CA 95131 </p>
        <p>info@brotherandbrotherca.com</p>
        <p>888.412.2632</p>
        <p style={{ fontWeight: `bold` }}>
          Servicing area: Oakland, South Bay, East Bay, Peninsula
        </p>
      </Address>
    </AddressContainer>

    <CopyrightWrapper>
      © 2012-{new Date().getFullYear()} |{` `}
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
