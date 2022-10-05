import { createGlobalStyle } from 'styled-components'
import Title from "./Components/Title";
import JobDescription from "./Components/JobDescription";
import ExperienceList from "./Components/ExperienceList";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
  }
`

const App = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <main>
          <Title>Daniel Giralt Len</Title>
          <JobDescription>Full stack web developer (+ data engineer and QA)</JobDescription>
          <ExperienceList>
            <section>Frontend</section>
            <section>Backend</section>
            <section>Architecture (Deploy+Monitor)</section>
            <section>Data Engineering</section>
            <section>Soft skills</section>
            <section>Video Games + Personal</section>
            <section>QA + Others</section>
          </ExperienceList>
      </main>
    </>
  );
}

export default App;
