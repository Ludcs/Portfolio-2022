import React from 'react';
import styled from 'styled-components';
import Avatar from '../assets/avatar_web_dev.svg';
import Typewriter from 'typewriter-effect';

export const Home = ({noShowSidebar}) => {
  return (
    <HomeContainer onClick={noShowSidebar}>
      <h1>
        Luciano <br /> De Carolis
      </h1>
      <span>
        <Typewriter
          options={{
            strings: ['Desarrollador Web Frontend'],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <img className="avatar" src={Avatar} alt="Avatar" />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #007acd;
  min-height: 550px;

  @media (min-width: 1200px) {
    height: 800px;
  }

  h1 {
    color: #ffffff;
    font-size: 45px;
    text-align: center;
    font-weight: 800;
    letter-spacing: 1.5px;

    @media (min-width: 768px) {
      font-size: 67.5px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;

    @media (min-width: 768px) {
      font-size: 27px;
    }
  }

  .avatar {
    width: 100px;
    height: 100px;
    margin: 0px auto;
    margin-top: 20px;
    filter: invert();

    @media (min-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }
`;
