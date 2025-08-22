import type { FC } from "react";
import type { Project } from "../data/projects";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition flex flex-col"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/projects/${project.id}`} className="flex-1">
        <img
          src={project.images[0]}
          alt={`Preview of ${project.title}`}
          className="w-full h-40 object-cover rounded-md mb-4"
          loading="lazy"
        />
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-600">{project.short_description}</p>
        <span className="text-sm text-blue-500">{project.category}</span>
      </Link>

      <Link
        to={`/projects/${project.id}`}
        className="mt-4 inline-block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
