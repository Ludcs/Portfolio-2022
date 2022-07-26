import React, {useEffect} from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {NavmenuActive} from './NavmenuActive';

export const Navbar = ({sidebar, showSidebar, noShowSidebar}) => {
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      noShowSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{color: '#ffffff'}}>
        <NavbarContainer>
          <AnchorBars href="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </AnchorBars>
          {sidebar && (
            <NavmenuActive sidebar={sidebar} noShowSidebar={noShowSidebar} />
          )}
        </NavbarContainer>
      </IconContext.Provider>
    </>
  );
};

const NavbarContainer = styled.div`
  background-color: #007acd;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const AnchorBars = styled.a`
  margin-left: 13px;
  font-size: 25px;
`;
