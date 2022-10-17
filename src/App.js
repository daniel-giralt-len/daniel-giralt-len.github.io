import styled, { createGlobalStyle } from 'styled-components'

import experienceSections from './experienceSections.json'

import ExperienceList from "./Components/ExperienceList";
import ExperienceSection from './Components/ExperienceSection';
import JobDescription from "./Components/JobDescription";
import PrintFriendlyAnchor from './Components/PrintFriendlyAnchor'
import Title from "./Components/Title";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
    color: #132158;
    @media print {
      font-size: 0.75em;
    }
    body {
      margin-top: 0;
      padding: 0 1em;
      @media print {
        padding: 0;
      }
      -webkit-print-color-adjust: exact !important;
      -webkit-print-color-adjust:exact !important;
      print-color-adjust:exact !important;
      background-color: #fff9f4;
    }
  }
`

const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
`

const EmailWrapper = styled.h3`
  display: flex;
  align-items: flex-end;
`

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CVWrapper = styled.main`
  max-width: 65em;
`

const Footer = styled.footer`
  text-align: center;
  font-size: 0.75em;
  margin-top: 3em;
  @media print {
    margin-top: 2em;
  }
`

const App = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <CenteredWrapper>
        <CVWrapper>
            <TitleLine>
              <Title>Daniel Giralt Len</Title>
              <EmailWrapper>
                Email:
                <PrintFriendlyAnchor href='daniel.giralt.len@gmail.com' underlined>daniel.giralt.len@gmail.com</PrintFriendlyAnchor>
              </EmailWrapper>
            </TitleLine>
            <JobDescription>Mid Full stack developer (& data engineer)</JobDescription>
            <ExperienceList>
              {experienceSections.map(section => <ExperienceSection key={section.sectionTitle} {...section} />)}
            </ExperienceList>
          <Footer>Designed as a React webpage.</Footer>
        </CVWrapper>
      </CenteredWrapper>
    </>
  );
}

export default App;
