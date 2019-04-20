import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import Awards from "../components/awards/awards";
import styled from "styled-components";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";

const AwardsContainer = styled.section`
  max-width: 800px;
  padding: 1rem 0;
`;

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1600) {
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {console.log(data)}
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero pageTitle="Brother & Brother Builders" subTitle="Your Home Design Experts" />
        <AwardsContainer>
          <Awards />
        </AwardsContainer>
      </Layout>
    )}
  />
);

export default IndexPage;
