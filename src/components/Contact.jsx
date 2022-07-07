import styled from 'styled-components';
import {ContactForm} from './form/ContactForm';

export const Contact = () => {
  const urlForm = 'https://formspree.io/f/mvolyzjp';

  return (
    <ContactContainer id="contacto">
      <PTitle>CONTACTO</PTitle>
      <ContactForm />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  border-left: 20px solid;
  border-right: 20px solid;
  border-top: 40px solid;
  border-bottom: 40px solid;
  border-color: #61ce70;
  background-color: #ffffff;

  @media (min-width: 600px) {
    border-left: 30px solid;
    border-right: 30px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #61ce70;
  }

  @media (min-width: 1200px) {
    border-left: 60px solid;
    border-right: 60px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #61ce70;
    height: auto;
  }
`;

const PTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: #ffffff;
  text-align: center;
  background-color: #3a3a3a;
  font-size: 18px;
  font-weight: 600;
  margin: -1px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    height: 65px;
  }
`;
