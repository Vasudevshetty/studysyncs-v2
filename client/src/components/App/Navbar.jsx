import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

function Navbar({ toggleSidebar }) {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the context

  return (
    <nav className="fixed top-0 flex z-50 w-full h-16 items-center justify-between px-1 sm:px-5 py-3 dark:bg-custom-black">
      <div className="flex items-center justify-between rtl:justify-end">
        <button
          className="inline-flex p-2 items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 dark:hover:bg-gray-700 sm:hidden"
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <Link
          to="/app/dashboard"
          className="focus:outline-none flex items-center gap-2"
        >
          <img
            src="/syncs.png"
            alt="logo"
            className="h-10 w-fit ml-2 max-sm:h-10"
          />
          <span className="md:block hidden text-3xl font-semibold dark:text-[#60cffb] text-[#224f94]">
            Studysyncs
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-1 sm:gap-3">
        <div className="items-center flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-300 p-2 hidden sm:block rounded-lg focus:outline-none bg-opacity-40 pr-10 focus:ring-2 focus:ring-gray-400 backdrop-blur-2xl dark:text-white dark:focus:ring-gray-400 dark:placeholder:text-white"
          />
          <button className="bg-none p-2 max-sm:focus:bg-gray-200 -ml-10 rounded-full sm:rounded-lg bg-opacity-40 active:-translate-y-[1px] transition-transform duration-75 focus:outline-none z-10 dark:text-white">
            <Search className="text-2xl" />
          </button>
        </div>
        <a
          href="https://github.com/Vasudevshetty/studysyncs-v2"
          className="p-3 rounded-full hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none"
          target="_blank"
        >
          <FaGithub className="text-2xl" />
        </a>
        <button
          onClick={() => toggleTheme()}
          className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center dark:hover:bg-white focus:outline-none text-gray-600 dark:text-white hover:text-white text-2xl hover:dark:text-gray-600"
        >
          <span>{isDarkMode ? <FaSun /> : <FaMoon />}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
