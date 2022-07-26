import styled from 'styled-components';
import GitHubIcon from '../assets/svgs/github.svg';
import LinkedIn from '../assets/svgs/linkedin.svg';
import CvIcon from '../assets/svgs/cvicon.svg';
import CvPdf from '../assets/cv/Luciano-De-Carolis-CV.pdf';

export const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://www.linkedin.com/in/luciano-de-carolis-36a751148/"
        target="_blank"
      >
        <Img src={LinkedIn} alt="Linkedin Icono" />
        <p>LinkedIn</p>
      </a>
      <a href="https://github.com/Ludcs" target="_blank">
        <Img src={GitHubIcon} alt="GitHub Icono" />
        <p>Github</p>
      </a>
      <a href={CvPdf} download="Luciano-De-Carolis-CV" target="_blank">
        <ImgCvIcon src={CvIcon} alt="Cv Icono" />
        <p id="pcv">Currículum</p>
      </a>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin: auto;
  padding: 5px;
  width: 100%;
  background-color: #f1efef;
  min-height: 60px;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: #161614;
    font-size: 14px;
    font-weight: 500;
    margin: auto;

    @media (min-width: 600px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      color: #ffffff;
    }
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  #pcv {
    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    background-color: #3a3a3a;
    justify-content: center;
    gap: 40px;
  }
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    filter: invert();
  }
`;

const ImgCvIcon = styled.img`
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
