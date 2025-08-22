import type { FC } from "react"
import type { Project } from "../data/projects"


const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-4">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <span className="text-sm text-blue-500">{project.category}</span>
    </div>
  )
}

export default ProjectCard
