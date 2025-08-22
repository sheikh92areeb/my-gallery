import type { FC } from "react";

interface SidebarProps {
  categories: string[];
  selected: string | null;
  showSidebar: boolean
  onSelect: (category: string | null) => void;
}

const Sidebar: FC<SidebarProps> = ({ categories, selected, showSidebar, onSelect }) => {
  return (
    <div 
        className={`w-48 h-fit md:block bg-gray-100 rounded-lg shadow-md p-4 sticky top-20 ${!showSidebar && 'hidden'}`}
    >        
        <h3 className="text-blue-500 text-xl font-bold mb-5">Categories</h3>
        <button
            className={`block w-full text-left p-2 rounded-md mb-2 ${selected === null ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}
            onClick={() => onSelect(null)}
        >
            All
        </button>
        {categories.map((cat) => (
            <button
                key={cat}
                className={`block w-full text-left p-2 rounded-md mb-2 ${selected === cat ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}
                onClick={() => onSelect(cat)}
            >
                {cat}
            </button>
        ))}        
    </div>
  )
}

export default Sidebar
