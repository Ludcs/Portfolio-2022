import React from 'react';
import SuccessIcon from '../../assets/svgs/success.svg';
import styled from 'styled-components';

export const MessageOk = () => {
  return (
    <Div>
      <img src={SuccessIcon} alt="Success Icon" />
      <p>
        Gracias por contactarme. <br /> Te respondere a la brevedad.
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
