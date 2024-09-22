import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; 
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } m-5 p-3 rounded-lg shadow-2xl transition-colors duration-300 tracking-wider font-medium`}
    >
      <div className="flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-8 sm:h-14" />
        <div className="hidden md:flex items-center justify-around gap-5">
          <Link to="#features">Features</Link>
          <Link to="#testimony">Testimony</Link>
          <Link
            to="/signup"
            className={`flex items-center gap-2 px-4 py-2 ${
              isDarkMode ? "border border-blue-300" : "border border-yellow-200"
            } rounded-lg`}
          >
            Signup <FiArrowRight />
          </Link>
          <Link
            to="/login"
            className={`flex items-center gap-2 px-4 py-2 ${
              isDarkMode ? "border border-blue-300" : "border border-yellow-200"
            } rounded-lg`}
          >
            Login <FiArrowRight />
          </Link>
          <button
            onClick={toggleTheme}
            className={`p-2 ${
              isDarkMode ? "border border-blue-300" : "border border-yellow-200"
            } rounded-lg`}
          >
            {!isDarkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-400" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/login"
            className={`flex items-center gap-1 text-xs ${
              isDarkMode ? "border border-blue-300" : "border border-yellow-200"
            } rounded-lg px-2 py-1`}
          >
            Login <FiArrowRight size={12} />
          </Link>

          <button
            onClick={toggleTheme}
            className={`flex items-center text-xs ${
              isDarkMode ? "border border-blue-300" : "border border-yellow-200"
            } rounded-lg p-1`}
          >
            {!isDarkMode ? (
              <FaSun className="text-yellow-500" size={12} />
            ) : (
              <FaMoon className="text-gray-400" size={12} />
            )}
          </button>

          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-${
            isDarkMode ? "gray-800" : "white"
          } shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className={`${isDarkMode ? "text-white" : "text-black"}`}>
              Menu
            </h2>
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FiX size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4">
            <Link to="#features" className="py-2 border-b">
              {isDarkMode ? (
                <span className="text-white">Features</span>
              ) : (
                "Features"
              )}
            </Link>
            <Link to="#testimony" className="py-2 border-b">
              {isDarkMode ? (
                <span className="text-white">Testimony</span>
              ) : (
                "Testimony"
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
