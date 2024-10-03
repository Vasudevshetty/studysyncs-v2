import { motion } from "framer-motion";
import { useState } from "react";
import { FaBookmark, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Resource } from "../Resource";

function Resources({ downloads, bookmarks }) {
  const [onResource, setOnResource] = useState("Download");
  const resource = onResource === "Download" ? downloads : bookmarks;

  return (
    <div className="bg-white dark:bg-gray-400 w-full md:w-[50%] h-[50%] md:h-full rounded-xl p-2 flex flex-col">
      <h1 className="text-2xl text-gray-800 font-bold dark:text-gray-200 px-4 py-2 flex items-center w-full justify-between">
        <div className="relative flex bg-gray-300 dark:bg-gray-600 rounded-full">
          <motion.div
            transition={{ type: "spring", duration: 0.5 }}
            className={`absolute top-0 bottom-0 w-1/2 rounded-full bg-gray-600 dark:bg-gray-300 transition-transform duration-300 ${
              onResource === "Bookmark" ? "translate-x-0" : "translate-x-full"
            }`}
          />

          <button
            className={`relative cursor-pointer focus:outline-none p-2 rounded-full z-10 transition-transform duration-300 ${
              onResource === "Bookmark"
                ? "dark:text-gray-600 text-gray-300"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOnResource("Bookmark")}
          >
            <FaBookmark />
          </button>
          <button
            className={`relative cursor-pointer focus:outline-none p-2 rounded-full z-10 transition-transform duration-300 ${
              onResource === "Download"
                ? "dark:text-gray-600 text-gray-300"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOnResource("Download")}
          >
            <FaDownload />
          </button>
        </div>
        <Link to="/app/notes">{onResource}</Link>
      </h1>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1 h-full w-full px-2 py-1">
        {resource.map((resource, index) => (
          <Resource resource={resource} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Resources;
