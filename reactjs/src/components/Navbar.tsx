import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { navItems } from "../data/appData";
import { NavLink } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Motion variants for animation
  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <nav
      className="flex items-center gap-4"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400 underline" : "text-gray-100"} 
               underline-offset-4 font-medium text-lg transition-colors hover:text-yellow-400`
            }
          >
            {label}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMenu(true)}
        className="md:hidden text-3xl cursor-pointer"
        aria-label="Open Menu"
      >
        <IoMenu />
      </button>

      {/* AnimatePresence handles enter/exit */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={() => setShowMenu(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed right-0 top-0 w-[250px] h-screen bg-blue-600 z-50 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMenu(false)}
                className="w-full h-14 text-3xl cursor-pointer flex items-center justify-end pr-4"
                aria-label="Close Menu"
              >
                <IoCloseSharp />
              </button>

              {/* Mobile Links */}
              <ul className="flex flex-col px-5 mt-6 space-y-2">
                {navItems.map(({ path, label }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `${isActive ? "text-yellow-400" : "text-gray-100"} 
                         border-b border-dashed font-medium text-lg py-2 transition-colors hover:text-yellow-400`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
