import React from "react"
import styled from "styled-components"

import award from "../../images/awards/yelp.png"

const Container = styled.section`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Awards = () => (
  <Container>
    <img src={award} alt="award" />
  </Container>
)

export default Awards
