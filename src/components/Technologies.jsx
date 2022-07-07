import React from 'react';
import styled from 'styled-components';
import Html5Icon from '../assets/svgs/html.svg';
import Css3Icon from '../assets/svgs/css.svg';
import SassIcon from '../assets/svgs/sass.svg';
import StyledComponentsIcon from '../assets/svgs/styled-components.png';
import JavascriptIcon from '../assets/svgs/js.svg';
import ReactIcon from '../assets/svgs/react.svg';

export const Technologies = () => {
  return (
    <TechnologiesContainer id="tecnologias">
      <PTitle>TECNOLOGÍAS</PTitle>

      <IconsContainer>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
        >
          <img className="html5" src={Html5Icon} alt="Html" />
          <P>HTML5</P>
        </a>
        <a href="https://css-tricks.com/guides/" target="_blank">
          <img className="css3" src={Css3Icon} alt="Css" />
          <P>CSS3</P>
        </a>
        <a href="https://sass-lang.com/documentation/" target="_blank">
          <img className="sass" src={SassIcon} alt="Sass" />
          <P>Sass</P>
        </a>
        <a href="https://styled-components.com/docs" target="_blank">
          <img
            className="styled_components"
            src={StyledComponentsIcon}
            alt="Styled Components"
          />
          <P>Styled Components</P>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <img className="javascript" src={JavascriptIcon} alt="JavaScrip" />
          <P>JavaScript</P>
        </a>
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
          <img className="react" src={ReactIcon} alt="React" />
          <P>React.js</P>
        </a>
      </IconsContainer>
    </TechnologiesContainer>
  );
};

const TechnologiesContainer = styled.div`
  width: 100%;
  border-left: 20px solid;
  border-right: 20px solid;
  border-top: 40px solid;
  border-bottom: 40px solid;
  border-color: #ffd845;
  background-color: #ffffff;

  @media (min-width: 600px) {
    border-left: 30px solid;
    border-right: 30px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #ffd845;
  }

  @media (min-width: 1200px) {
    border-left: 60px solid;
    border-right: 60px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #ffd845;
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  gap: 40px;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-rows: 150px 150px 150px;
  }

  a {
    text-decoration: none;
    text-align: center;
  }

  .html5,
  .css3,
  .sass,
  .styled_components,
  .javascript,
  .react {
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    filter: grayscale();
  }

  .html5:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
  }
  .css3:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
  }
  .sass:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
  }
  .styled_components:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
  }
  .javascript:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
  }
  .react:hover {
    cursor: pointer;
    filter: none;
    transition: filter ease-in-out 0.2s;
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

const P = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #3a3a3a;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
