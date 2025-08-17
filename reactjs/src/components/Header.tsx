import { assets } from "../assets/assets"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="fixed right-0 left-0 top-0 w-full min-h-12 bg-gray-100/5 backdrop-blur-3xl py-2">
        <div className="container h-full flex items-center justify-between">
            <div className="logo min-w-[38px] flex items-center gap-2 cursor-pointer">
                <img src={assets.logo} alt="Logo" width={36} />
                <h1 className="hidden sm:block text-2xl text-blue-600 font-semibold">Areeb Sheikh</h1>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
        </div>
    </header>
  )
}

export default Header
