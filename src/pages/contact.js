import React from "react";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { FaPen } from "react-icons/fa";

import ContactHero from "../assets/images/project-photos/FULL-Ben&Sandy-Wu/image-19.jpg";

// const Form = styled.form`
//   max-width: 835px;
//   marginbottom: 1.45rem;
//   margin: 3rem auto 0;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   max-width: 100%;
// `;

// const Input = styled.input`
//   background-color: #ddd;
//   flex-grow: 1;
//   border: none;
//   padding: 5px;
//   color: #777;
//   margin: 0 1rem 0.5rem;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   margin: 0 auto;
//   border: 0;
//   background-color: #ddd;
//   padding: 5px;
//   color: #777;
//   background-clip: padding-box;
// `;

// const SubmitWrapper = styled.div`
//   width: 100%;
//   margin-top: 0.44rem;
// `;

// const SubmitButton = styled.button`
//   border: 0;
// `;

// const SubmitInput = styled.input`
//   font-weight: 500;
//   color: #ddd;
//   background-color: #444;
//   padding: 10px 25px;
//   border: 0;
// `;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero imgSrc={ContactHero} pageTitle="Contact Us" subTitle="Reach out for a quote!" />

    <h2 style={{ paddingLeft: `5rem`, paddingTop: `3rem` }}>
      <FaPen />
    </h2>
    <Form style={{ padding: `5rem` }}>
      <Form.Row>
        <Form.Group style={{ marginRight: `1rem` }}>
          <Form.Control
            type="text"
            placeholder="NAME"
            style={{
              backgroundColor: `#ddd`,
              border: `none`,
              borderRadius: `0`
            }}
          />
        </Form.Group>
        <Form.Group style={{ marginRight: `1rem` }}>
          <Form.Control
            type="text"
            placeholder="LAST NAME"
            style={{ backgroundColor: `#ddd`, border: `none`, borderRadius: `0` }}
          />
        </Form.Group>

        <Form.Group style={{ marginRight: `1rem` }}>
          <Form.Control
            type="tel"
            placeholder="PHONE #"
            style={{ backgroundColor: `#ddd`, border: `none`, borderRadius: `0` }}
          />
        </Form.Group>
        <Form.Group style={{ marginRight: `1rem` }}>
          <Form.Control
            type="email"
            placeholder="EMAIL"
            style={{ backgroundColor: `#ddd`, border: `none`, borderRadius: `0` }}
          />
        </Form.Group>
      </Form.Row>

      <FormControl
        as="textarea"
        aria-label="With textarea"
        style={{ backgroundColor: `#ddd`, border: `none`, borderRadius: `0` }}
      />

      <Button style={{ borderRadius: `0`, marginTop: `1rem` }} variant="secondary" type="submit">
        SEND
      </Button>
    </Form>
  </Layout>
);

export default Contact;
