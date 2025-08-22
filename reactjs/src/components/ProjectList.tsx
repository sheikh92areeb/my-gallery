import type { FC } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard"

interface ProjectsListProps {
  projects: Project[];
  limit?: number; // Optional limit for home page
  filterByCategory?: string | null; // Optional category filter
}

const ProjectList: FC<ProjectsListProps> = ({ projects, limit, filterByCategory }) => {
     const filteredProjects = filterByCategory
    ? projects.filter((p) => p.category === filterByCategory)
    : projects;

    const displayedProjects = limit ? filteredProjects.slice(-limit) : filteredProjects;
  return (
     <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-6">
        {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
        ))}
     </div>
  )
}

export default ProjectList
