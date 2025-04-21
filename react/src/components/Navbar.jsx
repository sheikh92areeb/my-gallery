import React from 'react'
import logo from '../assets/logo-1.png'

function Navbar() {
  return (
    <nav className='bg-gray-300 flex gap-15 items-center justify-between px-25 py-3 shadow-md sticky top-0'>
        <div className="left flex gap-15 items-center">
            <div className="logo cursor-pointer">
                <img src={logo} alt="logo" className='w-50' />
            </div>
            <ul className='flex gap-4'>
                <li className='text-gray-600 text-lg font-medium hover:text-red-600 border-b-2 border-b-transparent hover:border-b-red-600 cursor-pointer'>Home</li>
                <li className='text-gray-600 text-lg font-medium hover:text-red-600 border-b-2 border-b-transparent hover:border-b-red-600 cursor-pointer'>Projects</li>
                <li className='text-gray-600 text-lg font-medium hover:text-red-600 border-b-2 border-b-transparent hover:border-b-red-600 cursor-pointer'>Who I am</li>
                <li className='text-gray-600 text-lg font-medium hover:text-red-600 border-b-2 border-b-transparent hover:border-b-red-600 cursor-pointer'>Contact Me</li>
            </ul>
        </div>
        <div className="right">
            <button className='border border-red-600 bg-red-600 text-sm hover:tracking-[0.4px] cursor-pointer text-white px-4 py-1 rounded-full'>Hire me</button>    
        </div>
    </nav>
  )
}

export default Navbar
