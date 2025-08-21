import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-gray-100">
        <div className="max-w-7xl mx-auto h-full px-4 py-3 flex max-sm:flex-col sm:justify-between items-center">
            <div className="max-sm:mb-5">
                <p className="text-sm text-center">
                    Copyright &copy; & Designed by Areeb Sheikh
                </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
                <a href=""><FaGithub /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaXTwitter /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
