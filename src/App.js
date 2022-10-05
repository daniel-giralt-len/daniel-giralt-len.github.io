import Title from "./Components/Title";
import JobDescription from "./Components/JobDescription";
import ExperienceList from "./Components/ExperienceList";

function App() {
  return (
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
  );
}

export default App;
