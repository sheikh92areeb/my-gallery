import { FaImages } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-16 bg-blue-500 text-gray-100 z-50 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto h-full px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaImages size={36} aria-hidden="true" />
          <h1 className="hidden sm:block text-2xl font-bold">
            Project Gallery
          </h1>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
