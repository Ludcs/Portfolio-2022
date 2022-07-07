import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {MessageOk} from './MessageOk';
import {MessageErr} from './MessageErr';
import {Loader} from './Loader';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_qdyw8sf',
        'template_56mf4lm',
        form.current,
        'q7uDpbGFAFmCx1IGB'
      )
      .then(
        (res) => {
          setLoading(false);
          console.log(res.text);
          setSuccessMessage(true);
        },
        (err) => {
          console.log(err.text);
          setErrorMessage(true);
        }
      );
    e.target.reset();
  };

  return (
    <FormContainer>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Nombre:</Label>
        <Input id="nameimput" type="text" name="user_name" required />
        <Label>Email:</Label>
        <Input id="email_input" type="email" name="user_email" required />
        <Label id="message">Mensaje:</Label>
        <Textarea name="message" required />
        <Button type="submit">Enviar</Button>
      </Form>
      {loading && <Loader />}
      {successMessage && <MessageOk />}
      {errorMessage && <MessageErr />}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
  margin: auto;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: auto;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #3a3a3a;

  &#message {
    margin-top: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #61ce70;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: 1200px) {
    font-size: 16px;
    width: 50%;
  }

  &#nameimput {
    text-align: center;
  }

  &#email_input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #61ce70;
    font-size: 14px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;

    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }

  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: 90%;
  height: 200px;
  padding: 5px;
  text-align: justify;
  font-size: 14px;
  border: 1px solid #61ce70;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 10%;
  color: #3a3a3a;
  font-weight: 500;
  border: 1px solid #61ce70;
  border-radius: 3px;
  background-color: transparent;
  padding: 7px;
  width: auto;

  &:hover {
    cursor: pointer;
    background-color: #3a3a3a;
    color: #ffffff;
    border: 1px solid transparent;
    transition: all ease-in-out 0.1s;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;
