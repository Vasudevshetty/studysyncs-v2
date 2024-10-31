import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="text-white px-14 flex gap-3 items-center py-1">
          <h1 className="text-xs sm:text-3xl font-bold">StudySyncs</h1>
        </div>

        <div className="text-white bg-secondary-blue px-12 pt-3 w-1/2 flex justify-around items-center opacity-80 rounded-tr-3xl box">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Features</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Testimony</a>
          <button className="flex items-center gap-2 rounded-3xl px-4 py-2 hover:bg-login-bg-hover bg-login-bg border border-opacity-10">
            <FiUser size={24} />
            <span className="font-medium">Login</span>
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Navbar */}
      <div className="lg:hidden flex justify-between items-center bg-primary text-white p-3">
        <h1 className="text-lg font-bold">StudySyncs</h1>

        <div className="flex items-center gap-2">
          {/* Login Button */}
          <button className="flex items-center gap-1 text-xs rounded-3xl px-3 py-1 hover:bg-login-bg-hover bg-login-bg border border-opacity-10">
            <FiUser size={18} />
            <span className="font-medium">Login</span>
          </button>

          {/* Mobile/Tablet Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? "" : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Slide-in Menu for Mobile/Tablet */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-br from-primary-blue to-secondary-blue transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-2/3 md:w-1/2 z-50 lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        <div className="flex flex-col items-center space-y-6 mt-24 text-white">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Features</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Testimony</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
