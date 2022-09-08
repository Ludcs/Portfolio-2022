import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: 'mobile',
    });
  }, []);

  return (
    <AboutContainer id="sobreMi" data-aos="fade-up">
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
        💻 Fan de la <span>tecnología</span>, el <span>diseño</span> y la{' '}
        <span>comunicación</span>.
      </p>
      <p id="p4">
        📢 Estoy en búsqueda de <span>mi primer experiencia laboral en IT</span>{' '}
        para continuar aprendiendo nuevas habilidades y tecnologías web que
        mejoren mi desarrollo profesional.
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
  position: relative;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1800px) {
    padding-left: 60px;
    padding-right: 60px;
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

      &#p4 {
        line-height: 25px;
      }
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
