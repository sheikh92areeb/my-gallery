import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from "react";

export type Category = {
  id: string;
  categoryName: string;
};

type Links = {
    github: string;
    live: string;
}

export type Project = {
  id: string;
  title: string;
  short_description: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  techStack: string[];
  images: string[];
  links: Links;
};

type ProjectContextType = {
  categories: Category[];
  projects: Project[];
  loading: boolean;
  error: string | null;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: FC<{children: ReactNode}> = ({children}) => {
    const [categories, setCategories] = useState<Category[]>([])
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch("https://sheikh92areeb.github.io/myFakeDB/ProjectGallery/projects.json");
            if (!res.ok) throw new Error("Failed to fetch data");

            const data = await res.json();

            setCategories(data.category || []);
            setProjects(data.projects || []);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const value = { categories, projects, loading, error }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProjects = (): ProjectContextType => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
};