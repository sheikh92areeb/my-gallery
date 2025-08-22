export interface Project {
    id: string;
    title: string;
    short_description: string
    description: string;
    category: string;
    tags: string[];
    features: string[];
    techStack: string[];
    images: string[];
    links?: {
        live?: string;
        github?: string;
    };
}

const projects: Project[] = [
    {
        id: "1",
        title: "Loft City - Vacation Rental Website",
        short_description: "A responsive and modern vacation rental platform built with ReactJS, designed to showcase rental properties with a clean and engaging user experience.",
        description: "Loft City is a fully responsive web project developed with ReactJS, tailored for vacation rental businesses. The platform combines sleek design with functional UI/UX to deliver a professional and user-friendly browsing experience for travelers and property managers.\n\nThe website emphasizes visual storytelling through well-structured layouts that highlight rental properties with clarity and appeal. It’s designed with a mobile-first approach, ensuring seamless accessibility across all devices, from smartphones to desktops.\n\nBy using modular and reusable React components, Loft City ensures scalability, maintainability, and future enhancements with minimal effort. The clean codebase, along with attention to modern design practices, makes this project both a portfolio highlight and a potential real-world business solution.\n\nThis project reflects my expertise in front-end web development, responsive design, and ReactJS component architecture, as well as my passion for crafting professional and engaging digital experiences.",
        category: "React",
        tags: [
            "ReactJS",
            "Responsive Design",
            "Web Development",
            "Vacation Rental Website",
            "Frontend Development",
            "UI/UX Design",
            "Portfolio Project",
            "React Components",
            "Modern Web Design"
        ],
        features: [
            "Responsive & Mobile-first Design - optimized for all screen sizes",
            "Property Showcase Layouts - clear and attractive sections for vacation rentals",
            "Clean UI/UX - focused on simplicity and visual appeal",
            "Reusable React Components - modular codebase for scalability",
            "Fast & Lightweight - optimized performance for smooth browsing",
            "Future-ready - easily extendable for booking systems",
            "filters - and admin dashboards."
        ],
        techStack: [
            "React",
            "Tailwind",
            "TypeScript",
            "React Router",
            "React Icons"
        ],
        images: [
            "https://res.cloudinary.com/dfdzkqstt/image/upload/v1755680854/Screenshot_622_j3hrer.png",
            "https://res.cloudinary.com/dfdzkqstt/image/upload/v1755681013/Screenshot_627_xpvc7n.png",
            "https://res.cloudinary.com/dfdzkqstt/image/upload/v1755681013/Screenshot_628_tfc7hg.png",
            "https://res.cloudinary.com/dfdzkqstt/image/upload/v1755681013/Screenshot_623_eemo4i.png"
        ],
        links: {
            live: "https://loftcity.netlify.app",
            github: "https://github.com/sheikh92areeb/loft-city"
        }
    }
]

export default projects