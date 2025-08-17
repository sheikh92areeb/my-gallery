import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { navItems } from "../data/appData";
import { NavLink } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (    
    <nav className="w-full flex gap-4 relative overflow-hidden rounded-full">
      <ul className={`bg-gray-200 h-10 z-10 flex items-center gap-6 rounded-full px-5 pe-12 transition-transform duration-500 ${showMenu?'translate-x-[0%]':'translate-x-[100%]'}`}>
        {navItems.map(({ path, label }, key) => (
          <NavLink key={key} to={path} className={({isActive})=> `${isActive? 'text-blue-600 underline' : 'text-gray-600'} underline-offset-3 font-medium`} >{label}</NavLink>
        ))}
      </ul>
      <button onClick={()=> setShowMenu((prev) => !prev)} className="absolute right-0 bg-gray-300 outline-0 text-2xl w-10 h-10 rounded-full grid place-items-center z-20 cursor-pointer">
        { showMenu ? <IoMdClose /> :<IoIosMenu />}
      </button>
    </nav>    
  )
}

export default Navbar
