import React from 'react';
import styled from 'styled-components';

export const About = () => {
  return (
    <AboutContainer id="sobreMi">
      <p className="title_hello">¡Bienvenidos!</p>
      <br />
      <p id="p1">
        📍 Soy Lucho de <span>Paraná</span>, Entre Ríos, Argentina.
      </p>
      <p id="p2">
        🎓 Recibido de <span>Licenciado en Nutrición</span> en la Universidad
        Nacional del Litoral.
      </p>
      <p id="p3">
        💻 Fan de la <span>tecnología</span>, la <span>creación</span>, el{' '}
        <span>diseño</span> y la <span>comunicación</span>.
      </p>
      <p id="p4">
        👀 Siempre <span>curioso</span>! Es esa curiosidad mi motor para
        aprender y crear.
      </p>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 300px;
  padding: 60px 20px 60px 20px;
  background-color: #fbfbfb;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  .title_hello {
    text-align: center;
    font-weight: 600;
    font-size: 33px;
    color: #3a3a3a;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 36px;
    }
    @media (min-width: 1200px) {
      font-size: 45px;
    }
  }

  #p1,
  #p2,
  #p3,
  #p4 {
    text-align: justify;
    color: #3a3a3a;
    line-height: 23px;
    font-weight: 300;
    margin-bottom: 20px;

    @media (min-width: 516px) {
      text-align: center;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1200px) {
      font-weight: 300;
    }
    @media (min-width: 1500px) {
      font-size: 20px;
    }
  }

  span {
    margin-left: 0px;
    font-weight: 500;
    color: #3a3a3a;

    @media (min-width: 1200px) {
      font-weight: 500;
    }
  }
`;
