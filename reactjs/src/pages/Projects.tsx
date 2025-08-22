import ProjectSection from "../components/ProjectSection"
import Title from "../components/Title"
import projects from "../data/projects"

const Projects = () => {
  return (
    <>
      <Title  title="My Projects" />
      <ProjectSection projects={projects} />
    </>
  )
}

export default Projects