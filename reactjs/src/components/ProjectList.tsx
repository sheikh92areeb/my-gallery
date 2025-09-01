import type { FC } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../context/ProjectContext";

interface ProjectsListProps {
  projects: Project[];
  limit?: number;
  filterByCategory?: string | null;
  itemsPerPage?: number;
}

const ProjectList: FC<ProjectsListProps> = ({projects,limit,filterByCategory,itemsPerPage = 6,}) => {

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = !limit && filterByCategory ? projects.filter((p) => p.category === filterByCategory) : projects;

  const displayedProjects = limit
    ? filteredProjects.slice(-limit) // latest projects for home
    : filteredProjects;

    console.log(filteredProjects)
  // Pagination logic
  const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = displayedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {paginatedProjects.length > 0 ? (
        <motion.div
          className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center text-gray-500 text-lg font-medium py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No Project Found
        </motion.div>
      )}

      {/* Pagination Controls */}
      {!limit && totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-blue-100"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-blue-100"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectList;
