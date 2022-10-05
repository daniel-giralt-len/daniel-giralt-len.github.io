import styled, { createGlobalStyle } from 'styled-components'

import experienceSections from './experienceSections.json'

import ExperienceList from "./Components/ExperienceList";
import ExperienceSection from './Components/ExperienceSection';
import JobDescription from "./Components/JobDescription";
import Title from "./Components/Title";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
  }
`

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <CenteredWrapper>
        <main>
            <Title>Daniel Giralt Len</Title>
            <JobDescription>Mid Full stack developer (& data engineer)</JobDescription>
            <ExperienceList>
              {experienceSections.map(section => <ExperienceSection key={section.sectionTitle} {...section} />)}
            </ExperienceList>
        </main>
        </CenteredWrapper>
    </>
  );
}

export default App;
