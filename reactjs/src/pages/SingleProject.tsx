import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import ImageGallery from "../components/ImageGallery";
import { useProjects, type Project } from "../context/ProjectContext";

const SingleProject = () => {
  const { projects, loading, error } = useProjects();  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Title & Short Desc */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          {project.title}
        </h1>
        <p className="text-gray-700 text-lg mb-6">{project.short_description}</p>
      </motion.div>

      {/* Image Gallery */}
      {project.images && <ImageGallery images={project.images} />}

      {/* Full Description */}
      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Project Overview
        </h2>
        <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
      </div>

      {/* Features */}
      {project.features && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {project.tags && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live Demo & GitHub Buttons */}
      {project.links && (
        <div className="flex gap-4 mb-10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              🚀 Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
            >
              💻 GitHub Code
            </a>
          )}
        </div>
      )}

      {/* Back Button */}
      <div className="mt-8">
        <Link
          to="/projects"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
