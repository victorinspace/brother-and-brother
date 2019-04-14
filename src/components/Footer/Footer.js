import React from "react"
import styled from "styled-components"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import PropTypes from "prop-types"

const Container = styled.footer`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  padding: 20px 0;
`

const CopyrightWrapper = styled.div`
  padding: 5px;
`

const SocialWrapper = styled.div`
  padding: 5px;
`

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Footer = ({ siteTitle }) => (
  <Container>
    <SocialWrapper>
      <a href="https://www.facebook.com/brotherandbrotherbuilders">
        <FaFacebookSquare />
      </a>
      <a href="https://www.instagram.com/b_b_builders/">
        <FaInstagram />
      </a>
    </SocialWrapper>

    <AddressContainer>
      <Address>
        <h3>SAN JOSE</h3>
        <p>1630 Oakland Rd #A211 San Jose, CA 95131 </p>
      </Address>
      <Address>
        <h3>WALNUT CREEK</h3>
        <p>1295 Boulevard Way #J Walnut Creek, CA 94595</p>
        <p>888.412.2632</p>
      </Address>
    </AddressContainer>

    <CopyrightWrapper>
      © 2017-{new Date().getFullYear()} |{` `}
      <a href="http://www.brotherandbrotherbuilders.com/">
        Brother and Brother Builders
      </a>
    </CopyrightWrapper>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
