import { Link } from "react-router"
import ProjectList from "./ProjectList"
import { useState, type FC } from "react";
import { type Project } from "../data/projects";
import Sidebar from "./Sidebar";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

interface ProjectsSectionProps {
  projects: Project[];
  limit?: number;  
}

const ProjectSection: FC<ProjectsSectionProps> = ({ projects, limit }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [showSidebar, setShowSidebar] = useState(false);

    // Extract unique categories
    const categories = [...new Set(projects.map((p) => p.category))]

  return (
    <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto h-full px-4">
            <h2 className="w-fit text-blue-500 text-3xl font-bold mb-6 pb-1 border-b-4 border-b-yellow-300">Latest Projects</h2>

             <div className="flex gap-6">
                { !limit && (
                    <Sidebar
                        categories={categories}
                        selected={selectedCategory}
                        showSidebar={showSidebar}
                        onSelect={setSelectedCategory}
                    />
                ) }
                <div className="flex-1">
                    <div className="sticky top-20 bg-white flex items-center gap-4 mb-5 py-2">
                        { !limit && (
                            <button                                
                                className="md:hidden text-3xl cursor-pointer text-blue-500"
                                aria-label="Open sidebar"
                                onClick={()=> setShowSidebar((prev)=> !prev)}
                            >
                                { showSidebar? <IoCloseSharp /> : <IoMenu />} 
                            </button>
                        ) }
                        <h3 className="text-blue-500 text-xl font-bold">All Projects</h3>
                    </div>
                    <ProjectList projects={projects} filterByCategory={selectedCategory} limit={limit} />
                </div>
             </div>


            { limit && ( 
                <div className="mt-10 text-center">
                    <Link
                        to="/projects"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Show More
                    </Link>
                </div> 
            )}
        </div>
    </section>
  )
}

export default ProjectSection
