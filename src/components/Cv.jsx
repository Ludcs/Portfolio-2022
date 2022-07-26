import styled from 'styled-components';
import CvIcon from '../assets/svgs/cvicon.svg';
import CvPdf from '../assets/cv/Luciano-De-Carolis-CV.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export const Cv = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <CvContainer data-aos="fade-right">
      <p>Descarga mi CV {'>>>'}</p>
      <span>Trabajemos Juntos!</span>
      <A href={CvPdf} download="Luciano-De-Carolis-CV">
        <Img src={CvIcon} alt="Descagar Curriculum" />
      </A>
    </CvContainer>
  );
};

const CvContainer = styled.div`
  @media (min-width: 768px) {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f1efef;

    span {
      color: #3a3a3a;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      width: 100%;

      @media (min-width: 1500px) {
        font-size: 20px;
      }
    }

    p {
      font-weight: 600;
      font-size: 24px;
      color: #3a3a3a;
      width: 100%;
      text-align: center;
      text-transform: capitalize;

      @media (min-width: 768px) {
        font-size: 27px;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const A = styled.a`
  @media (min-width: 768px) {
    text-decoration: none;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  @media (min-width: 768px) {
    color: #3a3a3a;
    width: 125px;
    height: 150px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
