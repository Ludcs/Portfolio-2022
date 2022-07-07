import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '../../assets/svgs/error.svg';

export const MessageErr = () => {
  return (
    <Div>
      <img src={ErrorIcon} alt="Error Icon" />
      <p>
        Ups, algo salió mal. <br /> Inténtalo mas tarde por favor!
      </p>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px 10px 0px;

  img {
    margin-right: 10px;
  }

  p {
    text-align: start;
    font-weight: 500;
    color: #3a3a3a;
    font-size: 16px;

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }
`;
