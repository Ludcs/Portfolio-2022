import styled, {css} from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import {Link} from 'react-scroll';
import './Navbar.css';
import {AnchorBars} from './Navbar';
import {NavText} from './SidebarData';

export const NavmenuActive = ({noShowSidebar}) => {
  return (
    <>
      <NavbarMenu>
        <Ul onClick={noShowSidebar}>
          <Li>
            <AnchorBars href="#">
              <AiIcons.AiOutlineClose onClick={noShowSidebar} />
            </AnchorBars>
          </Li>
          {SidebarData.map((item, index) => {
            return (
              <NavText key={index}>
                <Link to={item.to} smooth={true} duration={1000}>
                  {item.icon}
                  <Span> {item.title} </Span>
                </Link>
              </NavText>
            );
          })}
        </Ul>
      </NavbarMenu>
    </>
  );
};

const NavbarMenu = styled.nav`
  background-color: #6ec1e4;
  width: auto;
  height: 600px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1;
  transition: 850ms;

  /* ${(props) =>
    props.showSidebar &&
    css`
      transition: all;
    `} */

  @media (min-width: 1200px) {
    margin-left: 150px;
    top: 30px;
    height: 85.5vh;
  }
`;

const Ul = styled.ul`
  width: 100%;
`;

const Li = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Span = styled.span`
  margin-left: 10px;
`;
