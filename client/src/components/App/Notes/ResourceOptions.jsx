import { useState, useEffect, useRef } from "react";
import { FaEllipsisV, FaDownload, FaRegBookmark, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ButtonsGroup() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Ellipsis Button for Small Screens */}
      <div className="min-[500px]:hidden">
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="p-2"
        >
          <FaEllipsisV />
        </button>
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100">
                <FaDownload />
                <span>Download</span>
              </button>
              <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100">
                <FaRegBookmark />
                <span>Bookmark</span>
              </button>
              <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100">
                <FaEye />
                <span>View</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buttons for Larger Screens */}
      <div className="flex gap-2 max-[500px]:hidden">
        <button className="p-2 rounded-full hover:bg-gray-300 active:translate-y-0.5">
          <FaDownload />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-300 active:translate-y-0.5">
          <FaRegBookmark />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-300 active:translate-y-0.5">
          <FaEye />
        </button>
      </div>
    </div>
  );
}

export default ButtonsGroup;
