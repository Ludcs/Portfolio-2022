import React from 'react';
import styled from 'styled-components';

export const Roadmap = () => {
  return (
    <RoadmapContainer>
      <p className="roadmap_title"> Mis estudios {'>>>'} </p>
      <p className="roadmap_description">
        Adquirí conocimientos sobre <b>HTML5</b>, <b>CSS3</b> y{' '}
        <b>JavaScript</b> en <i>Platzi</i>. Posteriormente, me adentré en{' '}
        <b>React.js</b> tomando el curso de <i>Udemy</i> llamado "React: De cero
        a experto, Hooks + MERN". Y mediante documentación más videotutoriales,
        aprendí otras skills como <b>styled-components</b> y <b>Sass</b>.
        <br />
        Actualmente sigo puliendo mis habilidades mediante el desarrollo de
        nuevos proyectos.
      </p>
      <br />
      <br />
      <p id="prox">Próximamente...</p>
      <p id="prox_description">
        Me interesa estudiar <b>TypeScript</b> y <b>Next.js!</b>
      </p>
    </RoadmapContainer>
  );
};

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 20px 40px 20px;
  justify-content: center;
  background-color: #f1efef;
  align-items: center;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .roadmap_title {
    font-weight: 600;
    font-size: 24px;
    color: #3a3a3a;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: 27px;
      line-height: 50px;
    }
  }

  .roadmap_description {
    margin-top: 23px;
    color: #3a3a3a;
    line-height: 30px;
    font-weight: 300;
    text-align: justify;
    width: 100%;

    b {
      color: #3a3a3a;
      font-weight: 500;

      @media (min-width: 1200px) {
        font-weight: 500;
      }
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1200px) {
      font-weight: 400;
      line-height: 35px;
    }

    @media (min-width: 1500px) {
      font-size: 20px;
    }
  }

  #prox {
    color: #3a3a3a;
    font-weight: 500;
    font-size: 18px;
    text-align: start;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  #prox_description {
    color: #3a3a3a;
    line-height: 30px;
    font-weight: 300;
    text-align: justify;
    width: 100%;

    b {
      color: #3a3a3a;
      font-weight: 500;

      @media (min-width: 1200px) {
        font-weight: 500;
      }
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1200px) {
      font-weight: 400;
      line-height: 35px;
    }
  }
`;
