import type { FC } from "react";
import { motion } from "framer-motion";

type Category = {
  id: string;
  categoryName: string;
};

interface SidebarProps {
  categories: Category[];
  selected: string | null;
  showSidebar: boolean;
  onSelect: (category: string | null) => void;
}

const Sidebar: FC<SidebarProps> = ({ categories, selected, showSidebar, onSelect }) => {
  return (
    <motion.aside
      className={`w-48 h-fit md:block bg-gray-100 rounded-lg shadow-md p-4 sticky top-20 z-10`}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: showSidebar || window.innerWidth >= 768 ? 0 : -200, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-blue-500 text-xl font-bold mb-5">Categories</h3>
      <ul className="space-y-2">        
        {categories.map(({ id, categoryName }) => (
          <li key={id}>
            <button
              className={`block w-full text-left p-2 rounded-md ${
                selected === categoryName ? "bg-blue-500 text-white font-semibold" : "hover:bg-blue-100"
              }`}
              onClick={() => onSelect(categoryName)}
            >
              {categoryName.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
