import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import styled from 'styled-components';

export const SidebarData = [
  {
    title: 'Sobre mi',
    icon: <IoIcons.IoMdPerson />,
    to: 'sobreMi',
  },
  {
    title: 'Tecnologías',
    icon: <FaIcons.FaKeyboard />,
    to: 'tecnologias',
  },
  {
    title: 'Proyectos',
    icon: <FaIcons.FaLaptopCode />,
    to: 'proyectos',
  },
  {
    title: 'Contacto',
    icon: <AiIcons.AiOutlineMessage />,
    to: 'contacto',
  },
];

export const NavText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 40px;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: #3a3a3a;
    }
  }
`;
