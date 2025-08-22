import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"
import States from "../components/States"
import projects from "../data/projects"


const Home = () => {
  return (
    <>
      <Hero />
      <States />
      <ProjectSection projects={projects} limit={4} />
    </>
  )
}

export default Home
