import React from "react";
import { Link } from "gatsby";
import Hero from "../../../components/HeroComponent/HeroComponent.js";
import Layout from "../../../components/layout";
import styled from "styled-components";
import SEO from "../../../components/seo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Lightbox from "react-images";
import Gallery from "react-grid-gallery";

import AboutHero from "../../../assets/images/project-photos/BATHROOM-Timothy-Smith-Project/img_8986.jpg";

import RoomAddition from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";

import One from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14691.jpg";
import Two from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14696.jpg";
import Three from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14702.jpg";
import Four from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14705.jpg";
import Five from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14706.jpg";
import Six from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14708.jpg";
import Seven from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14712.jpg";
import Eight from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14719.jpg";
import Nine from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14722-HDR.jpg";
import Ten from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14729.jpg";
import Eleven from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14730.jpg";
import Twelve from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14732.jpg";
import Thirteem from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14733.jpg";
import Fourteen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14738.jpg";
import Fifteen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14747.jpg";
import Sixteen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14750.jpg";
import Seventeen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14752.jpg";
import Eighteen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14763.jpg";
import Nineteen from "../../../assets/images/project-photos/ADDITION-The-Cedar-Project/K1_14770.jpg";

const Wrapper = styled.section`
  max-width: 95vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    thumbnail: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 183
  },
  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
    thumbnailWidth: 240,
    thumbnailHeight: 320
  },
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 190
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 148
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    alt: "Big Ben - London",
    thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
    thumbnailWidth: 248,
    thumbnailHeight: 320
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    alt: "Red Zone - Paris",
    thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 113
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    alt: "Wood Glass",
    thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
    thumbnailWidth: 313,
    thumbnailHeight: 320
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 194
  },
  {
    src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    alt: "Cosmos Flower",
    thumbnail: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
    thumbnailWidth: 271,
    thumbnailHeight: 320
  },
  {
    src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    thumbnail: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    thumbnail: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213
  },
  {
    src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 179
  },
  {
    src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 215
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
    thumbnailWidth: 257,
    thumbnailHeight: 320
  },
  {
    src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    thumbnail: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg",
    thumbnailWidth: 226,
    thumbnailHeight: 320
  }
];

class Additions extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Room Additions" />
        <Hero imgSrc={RoomAddition} pageTitle="Room Additions" />
        <Wrapper>
          <Container>
            <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true} />
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

export default Additions;
