import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const Form = styled.form`
  max-width: 1000px;
  marginbottom: 1.45rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const InputGroup = styled.div`
  border: 1px solid red;
  max-width: 850px;
  margin: 0 auto;
`;

const Input = styled.input`
  background-color: #ddd;
  border: none;
  padding: 5px;
  color: #777;
  margin: 0 3rem 5rem 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border: 0;
  background-color: #ddd;
  padding: 5px;
  color: #777;
  background-clip: padding-box;
`;

const SubmitButton = styled.button`
  border: 0;
  display: block;
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
    <Hero pageTitle="Contact Us" subTitle="Reach out for a quote!" />
    <Form>
      <InputGroup>
        <Input placeholder="NAME" />
        <Input placeholder="LAST NAME" />
        <Input placeholder="PHONE #" />
        <Input placeholder="EMAIL" />
      </InputGroup>

      <TextArea placeholder="MESSAGE" name="message" rows="10" cols="30" />

      <SubmitButton>
        <SubmitInput type="submit" value="SEND" />
      </SubmitButton>
    </Form>
  </Layout>
);

export default Contact;
