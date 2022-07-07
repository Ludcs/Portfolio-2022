import {Fragment, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {ScrollToTop} from './components/ScrollToTop';
import {Navbar} from './components/navbar/Navbar';
import {Home} from './components/Home';
import {About} from './components/About';
import {Roadmap} from './components/Roadmap';
import {Technologies} from './components/Technologies';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Cv} from './components/Cv';
import {ProjectsDescription} from './components/ProjectsDescription';

export const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const noShowSidebar = () => setSidebar(false);

  return (
    <Fragment>
      <GlobalStyles />
      <MainContainer>
        <ScrollToTop />
        <Navbar
          sidebar={sidebar}
          showSidebar={showSidebar}
          noShowSidebar={noShowSidebar}
        />
        <Home noShowSidebar={noShowSidebar} />
        <About />
        <DivGrid768>
          <Roadmap />
          <Technologies />
        </DivGrid768>
        <DivGrid768>
          <Projects />
          <ProjectsDescription />
        </DivGrid768>
        <DivGrid768>
          <Cv />
          <Contact />
        </DivGrid768>
        <Footer />
      </MainContainer>
    </Fragment>
  );
};

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #ffffff;
  padding: 20px;
  min-width: 375px;

  @media (min-width: 1200px) {
    padding: 0px;
    margin: 30px 150px;
  }
}
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fff;
`;

const DivGrid768 = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }
`;
