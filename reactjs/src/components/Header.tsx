import { FaImages } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-12 bg-blue-500 text-gray-100 relative z-50">
      <div className="w-full h-full container flex justify-between items-center">
        <div className="logo flex items-center gap-2 cursor-pointer">
          <FaImages size={40} />
          <h1 className="hidden sm:block text-3xl font-bold" >Project Gallery</h1>
        </div>
        <div className="">
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
