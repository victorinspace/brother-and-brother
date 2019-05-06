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

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero imgSrc={ContactHero} pageTitle="Contact" subTitle="Reach out for a quote!" />

    <h2 style={{ paddingLeft: `5rem`, paddingTop: `3rem` }}>
      <FaPen />
    </h2>

    <Form>
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
