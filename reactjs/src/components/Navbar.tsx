import { Link } from "react-router"
import { assets } from "../assets/assets"


const Navbar = () => {
  return (
    <nav className="bg-gray-300 container mx-auto sticky top-4 h-12 rounded-full flex items-center px-8">
        <Link to='/' className="logo flex items-center gap-2">
            <img src={assets.logo} alt="" width={36}  />
            <h1 className="text-2xl font-semibold text-blue-800">Areeb Sheikh</h1>
        </Link>
    </nav>
  )
}

export default Navbar
