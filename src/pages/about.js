import React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const Container = styled.section`
  max-width: 1000px;
  margin: 50px auto 0;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero pageTitle="Who we are" subTitle="What we do best" />
    <Container>
      <p>
        Brother and Brother Builders is a licensed, bonded and insured
        remodeling and building company servicing the Northern California area.
        We are family owned and have been in business for over 10 years. Our
        comprehensive experience will provide you with exceptional results and
        satisfaction. We specialize in room additions, kitchen and bathroom
        remodeling and all areas of home construction. Our team looks forward to
        working with you on your project.
      </p>
    </Container>
  </Layout>
)

export default About
