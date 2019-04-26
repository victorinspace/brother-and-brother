import React from "react";
import Hero from "../components/HeroComponent/HeroComponent.js";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

import ContactHero from "../assets/images/project-photos/FULL-Ben&Sandy-Wu/image-19.jpg";

const Form = styled.form`
  max-width: 835px;
  marginbottom: 1.45rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
`;

const Input = styled.input`
  background-color: #ddd;
  flex-grow: 1;
  border: none;
  padding: 5px;
  color: #777;
  margin: 0 0.55rem 0.44rem 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  border: 0;
  background-color: #ddd;
  padding: 5px;
  color: #777;
  background-clip: padding-box;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 0.44rem;
`;

const SubmitButton = styled.button`
  border: 0;
`;

const SubmitInput = styled.input`
  font-weight: 500;
  color: #ddd;
  background-color: #444;
  padding: 10px 25px;
  border: 0;
`;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero imgSrc={ContactHero} pageTitle="Contact Us" subTitle="Reach out for a quote!" />
    <Form>
      <InputGroup>
        <Input placeholder="NAME" />
        <Input placeholder="LAST NAME" />
        <Input placeholder="PHONE #" />
        <Input placeholder="EMAIL" />
      </InputGroup>

      <TextArea placeholder="MESSAGE" name="message" rows="10" cols="30" />

      <SubmitWrapper>
        <SubmitButton>
          <SubmitInput type="submit" value="SEND" />
        </SubmitButton>
      </SubmitWrapper>
    </Form>
  </Layout>
);

export default Contact;
