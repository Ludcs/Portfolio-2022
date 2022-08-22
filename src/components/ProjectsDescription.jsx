import styled from 'styled-components';
import PlayDemoIcon from '../assets/svgs/playdemo.svg';
import GitHubIcon from '../assets/svgs/github.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export const ProjectsDescription = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Div data-aos="fade-left">
      <p id="div_title_description">Descripción {'>>>'}</p>
      <Project1Container768>
        <PDescription768>
          <span>CRUD</span> con los personajes de Star Wars haciendo uso de la{' '}
          <i>API REST de JSON SERVER</i>. Tecnologias utilizadas:{' '}
          <span>React + styled-components</span>.
        </PDescription768>

        <IconsContainer768>
          <a href="https://crudstarwarsreact.herokuapp.com/" target="_blank">
            <Icon768 src={PlayDemoIcon} alt="Play Demo 1" />
            <p>VISITAR</p>
          </a>
          <a
            href="https://github.com/Ludcs/CRUD-Star-Wars-react"
            target="_blank"
          >
            <Icon768 src={GitHubIcon} alt="Github Repositorio 1" />
            <p>REPOSITORIO</p>
          </a>
        </IconsContainer768>
      </Project1Container768>
      <hr id="hr1" />
      <Project2Container768>
        <PDescription768>
          <span>Peticiones a una API</span> con manejo de <i>DatePickers</i>{' '}
          para mostrar audiencias de fechas pasadas. Tecnologias utilizadas:{' '}
          <span>React + styled-components + librerias</span>.
        </PDescription768>
        <IconsContainer768>
          <a href="https://www.youtube.com/watch?v=71KoNFdTCxk" target="_blank">
            <Icon768 src={PlayDemoIcon} alt="Play Demo 2" />
            <p>VISITAR</p>
          </a>
          <a href="https://github.com/Ludcs/Hearings-Date-App" target="_blank">
            <Icon768 src={GitHubIcon} alt="Github Repositorio 2" />
            <p>REPOSITORIO</p>
          </a>
        </IconsContainer768>
      </Project2Container768>
      <hr id="hr2" />
      <Project3Container768>
        <PDescription768>
          <span>Peticiones a una API</span> para mostrar frases del estilo{' '}
          <i>Zen</i>, agregar frases propias y poder borrarlas desde un listado.
          Tecnologias utilizadas: <span>React + CSS3</span>.
        </PDescription768>
        <IconsContainer768>
          <a href="https://zen-app-three.vercel.app/" target="_blank">
            <Icon768 src={PlayDemoIcon} alt="Play Demo 3" />
            <p>VISITAR</p>
          </a>
          <a href="https://github.com/Ludcs/Zen-App" target="_blank">
            <Icon768 src={GitHubIcon} alt="Github Repositorio 3" />
            <p>REPOSITORIO</p>
          </a>
        </IconsContainer768>
      </Project3Container768>
      <hr id="hr3" />
      <Project3Container768>
        <PDescription768>
          <span>Adviency Challenge Responsive</span>. Los usuarios pueden{' '}
          <i>agregar</i>, <i>editar</i>, <i>duplicar</i> y <i>eliminar</i>{' '}
          regalos. Los datos persisten por el uso de <i>localStorage</i> y dicha
          lista se puede <i>imprimir</i>. Tecnologias utilizadas:{' '}
          <span>React + styled-components + librerias</span>.
        </PDescription768>
        <IconsContainer768>
          <a href="https://adviency-luciano-dc.vercel.app/" target="_blank">
            <Icon768 src={PlayDemoIcon} alt="Play Demo 4" />
            <p>VISITAR</p>
          </a>
          <a href="https://github.com/Ludcs/adviency" target="_blank">
            <Icon768 src={GitHubIcon} alt="Github Repositorio 3" />
            <p>REPOSITORIO</p>
          </a>
        </IconsContainer768>
      </Project3Container768>
      <hr id="hr3" />
      <Project4Container768>
        <PDescription768>
          <span>Portfolio Web Responsive</span> con vista para{' '}
          <i>mobile, tablet y desktop</i>. Tecnologias utilizadas:{' '}
          <span>React + Vite + styled-components + librerias</span>.
        </PDescription768>
        <IconsContainer768>
          <a href="https://github.com/Ludcs/Portfolio-2022" target="_blank">
            <Icon768 src={GitHubIcon} alt="Github Repositorio 4" />
            <p>REPOSITORIO</p>
          </a>
        </IconsContainer768>
      </Project4Container768>
    </Div>
  );
};

const Div = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 60px 20px 62px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1efef;

    @media (min-width: 1500px) {
      padding: 60px 30px 62px 30px;
    }
    @media (min-width: 1700px) {
      padding: 60px 60px 62px 60px;
    }

    #div_title_description {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      color: #ffffff;
      text-align: center;
      color: #3a3a3a;
      font-size: 18px;
      font-weight: 600;

      @media (min-width: 768px) {
        font-size: 27px;
      }

      @media (min-width: 1200px) {
        height: 65px;
      }
    }

    hr {
      width: 100%;
      height: 3px;
      border-style: none;
      background: -webkit-linear-gradient(left, #c90c0c, #f1efef, #3a3a3a);
    }

    @media (min-width: 768px) {
      #hr1 {
        margin-top: 5px;
      }
      #hr2 {
        margin-top: 40px;
      }
      #hr3 {
        margin-top: 20px;
      }
    }

    @media (min-width: 1700px) {
      #hr1 {
        margin-top: 5px;
      }
      #hr2 {
        margin-top: 70px;
      }
      #hr3 {
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Project1Container768 = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Project2Container768 = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Project3Container768 = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Project4Container768 = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const PDescription768 = styled.p`
  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    color: #3a3a3a;
    padding-top: 10px;

    span {
      margin-left: 0px;
      color: #3a3a3a;
      font-weight: 500;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media (min-width: 1500px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

const IconsContainer768 = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      color: #161614;
      font-size: 16px;
      margin: auto;
      font-weight: 600;
      color: #c90c0c;
    }

    @media (min-width: 1500px) {
      margin-top: 40px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Icon768 = styled.img`
  @media (min-width: 768px) {
    width: 27px;
    height: 27px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
