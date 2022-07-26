import styled from 'styled-components';
import ImgProject1 from '../assets/img_project_1.png';
import ImgProject2 from '../assets/img_project_2.jpg';
import ImgProject3 from '../assets/img_project_3.png';
import ImgProject4 from '../assets/img_project_4.png';
import PlayDemoIcon from '../assets/svgs/playdemo.svg';
import GitHubIcon from '../assets/svgs/github.svg';

export const Projects = () => {
  return (
    <>
      <ProjectsContainer id="proyectos">
        <PTitle>PROYECTOS</PTitle>
        <Project1Container>
          <ImgProject src={ImgProject1} alt="Proyecto 1" />

          <PDescription>
            <span>CRUD</span> con personajes de Star Wars haciendo uso de la API
            REST de JSON SERVER. Tecnologias utilizadas:{' '}
            <span>React + styled-components</span>.
          </PDescription>
          <IconsContainer>
            <a href="https://crudstarwarsreact.herokuapp.com/" target="_blank">
              <Icon src={PlayDemoIcon} alt="Play Demo 1" />
              <p>DEMO</p>
            </a>
            <a
              href="https://github.com/Ludcs/CRUD-Star-Wars-react"
              target="_blank"
            >
              <Icon src={GitHubIcon} alt="Github Repositorio 1" />
              <p>REPO</p>
            </a>
          </IconsContainer>
        </Project1Container>

        <Project2Container>
          <ImgProject src={ImgProject2} alt="Proyecto 2" />
          <PDescription>
            <span>Peticiones a una API</span> con manejo de{' '}
            <span>DatePickers</span> para mostrar audiencias de fechas pasadas.
            Tecnologias utilizadas: <span>React + styled-components</span>.
          </PDescription>
          <IconsContainer>
            <a
              href="https://www.youtube.com/watch?v=71KoNFdTCxk"
              target="_blank"
            >
              <Icon src={PlayDemoIcon} alt="Play Demo 2" />
              <p>DEMO</p>
            </a>
            <a
              href="https://github.com/Ludcs/Hearings-Date-App"
              target="_blank"
            >
              <Icon src={GitHubIcon} alt="Github Repositorio 2" />
              <p>REPO</p>
            </a>
          </IconsContainer>
        </Project2Container>

        <Project3Container>
          <ImgProject src={ImgProject3} alt="Proyecto 3" />
          <PDescription>
            <span>Peticiones a una API</span> para mostrar frases del estilo{' '}
            <span>Zen</span>, agregar frases propias y poder borrarlas desde un
            listado. Tecnologias utilizadas: <span>React + CSS3</span>.
          </PDescription>
          <IconsContainer>
            <a href="https://zen-app-three.vercel.app/" target="_blank">
              <Icon src={PlayDemoIcon} alt="Play Demo 3" />
              <p>DEMO</p>
            </a>
            <a href="https://github.com/Ludcs/Zen-App" target="_blank">
              <Icon src={GitHubIcon} alt="Github Repositorio 3" />
              <p>REPO</p>
            </a>
          </IconsContainer>
        </Project3Container>

        <Project4Container>
          <ImgProject id="img4" src={ImgProject4} alt="Proyecto 4" />
          <PDescription>
            <span>Portfolio Web Responsive</span> con vista para mobile, tablet
            y desktop. Tecnologias utilizadas:{' '}
            <span>React + Vite + styled-components</span>.
          </PDescription>
          <IconsContainer>
            <a href="" target="_blank">
              <Icon src={GitHubIcon} alt="Github Repositorio 3" />
              <p>REPO</p>
            </a>
          </IconsContainer>
        </Project4Container>
      </ProjectsContainer>
    </>
  );
};

const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 600px;
  border-left: 20px solid;
  border-right: 20px solid;
  border-top: 40px solid;
  border-bottom: 40px solid;
  border-color: #c90c0c;
  background-color: #ffffff;

  @media (min-width: 600px) {
    border-left: 30px solid;
    border-right: 30px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #c90c0c;
  }

  @media (min-width: 1200px) {
    border-left: 60px solid;
    border-right: 60px solid;
    border-top: 60px solid;
    border-bottom: 60px solid;
    border-color: #c90c0c;
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

const Project1Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 20px 0px 30px 0px;
  padding: 0px 20px;
`;

const Project2Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 20px 0px 30px 0px;
  padding: 0px 20px;
`;

const Project3Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 20px 0px 30px 0px;
  padding: 0px 20px;
`;

const Project4Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 20px 0px 30px 0px;
  padding: 0px 20px;
`;

const ImgProject = styled.img`
  object-fit: cover;
  object-position: top;
  filter: grayscale();
  border-radius: 6px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);

  &:hover {
    filter: none;
    transition: filter ease-in-out 0.1s;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const PDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: justify;
  color: #3a3a3a;
  margin: 35px 0px;

  span {
    margin-left: 0px;
    color: #3a3a3a;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: auto;
  justify-content: space-evenly;
  padding: 5px;
  gap: 35px;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: #161614;
    font-size: 14px;
    margin: auto;
    font-weight: 600;
    color: #c90c0c;

    @media (min-width: 600px) {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;

  @media (min-width: 768px) {
    display: none;
  }
`;
