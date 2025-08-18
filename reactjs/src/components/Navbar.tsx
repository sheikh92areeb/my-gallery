import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { navItems } from "../data/appData";
import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {  
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (    
    <nav className="flex items-center gap-4">
      <ul className="hidden md:flex items-center gap-5">
        {navItems.map(({ path, label }, key) => (
          <NavLink key={key} to={path} className={({ isActive })=> `${ isActive? 'text-yellow-400 underline' : 'text-gray-100' } underline-offset-4 font-medium text-lg hover:text-yellow-400` } >
            {label}
          </NavLink>
        ))}        
      </ul>
      <button onClick={() => setShowMenu(true)} className="md:hidden text-3xl cursor-pointer">
        <IoMenu />
      </button>

      <div className={`mobile-menu md:hidden w-[250px] h-screen bg-blue-600 absolute right-0 top-0 transition-transform duration-500 ${showMenu ? 'translate-x-[0%] ' : 'translate-x-[100%] '} `}>
        <button onClick={() => setShowMenu(false)} className="w-full h-12 text-3xl cursor-pointer flex items-center justify-end pe-4">
          <IoCloseSharp />
        </button>
        <ul className="flex flex-col px-5 mt-5">
        {navItems.map(({ path, label }, key) => (
          <NavLink key={key} to={path} className={({ isActive })=> `${ isActive? 'text-yellow-400' : 'text-gray-100' } border-b border-dashed font-medium text-lg hover:text-yellow-400 py-2` } >
            {label}
          </NavLink>
        ))}        
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
