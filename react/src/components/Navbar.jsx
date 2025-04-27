import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='w-[80%] bg-white/80 fixed top-5 left-[50%] translate-x-[-50%] h-[10vh] rounded-full shadow-lg flex justify-between items-center px-5'>        
        <div className="logo cursor-pointer flex gap-2 items-center">   
            <img src={logo} alt="logo" className='w-8' />
            <h1 className='text-2xl font-medium text-[#457ec3]'>Areeb Sheikh</h1>
        </div>
        <ul className='flex gap-4'>
            <li className='text-gray-800 text-lg font-medium hover:text-[#457ec3] border-b-2 border-b-transparent hover:border-b-[#457ec3] transition-all duration-300 cursor-pointer'>Home</li>
            <li className='text-gray-800 text-lg font-medium hover:text-[#457ec3] border-b-2 border-b-transparent hover:border-b-[#457ec3] transition-all duration-300 cursor-pointer'>Projects</li>
            <li className='text-gray-800 text-lg font-medium hover:text-[#457ec3] border-b-2 border-b-transparent hover:border-b-[#457ec3] transition-all duration-300 cursor-pointer'>Who I am</li>
            <li className='text-gray-800 text-lg font-medium hover:text-[#457ec3] border-b-2 border-b-transparent hover:border-b-[#457ec3] transition-all duration-300 cursor-pointer'>Contact Me</li>
        </ul>        
        <div className="right">
            <button className='border border-[#457ec3] bg-[#457ec3] hover:bg-[#457ec3]/80 text-sm  cursor-pointer text-white px-4 py-1 rounded-full'>Hire me</button>    
        </div>
    </nav>
  )
}

export default Navbar
