import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the context

  return (
    <nav className="fixed top-0 flex z-50 w-full bg-white items-center justify-between px-5 py-3 border-b dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between rtl:justify-end">
        <button
          className="inline-flex p-2 items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 dark:hover:bg-gray-700 sm:hidden"
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <Link to="/app/dashboard">
          <img src="/syncs.png" alt="logo" className="h-12 w-fit ml-2" />
        </Link>
      </div>
      <button
        onClick={() => toggleTheme()}
        className="p-2 bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center dark:bg-white"
      >
        <span className="dark:text-gray-600 text-white">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
