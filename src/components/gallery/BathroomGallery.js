import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Lightbox from "./lightbox";

const BathroomGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        bathroomImages: allFile(filter: { sourceInstanceName: { eq: "bathroom" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox bathroomImages={data.bathroomImages.edges} />}
  />
);

export default BathroomGallery;
