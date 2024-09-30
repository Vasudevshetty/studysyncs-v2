import { links } from "@/constants";
import LinkItem from "./LinkItem";
import { useEffect, useRef } from "react";
import { FaSignOutAlt } from "react-icons/fa";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleOverlayClick(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target))
        setIsSidebarOpen(false);
    }
    document.addEventListener("mousedown", handleOverlayClick);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [sidebarRef, setIsSidebarOpen]);

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full pt-[4.5rem] pb-[3rem] w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={sidebarRef}
    >
      <div className="flex-1 px-3 py-2 overflow-y-auto h-full flex flex-col justify-between">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <LinkItem
              key={index}
              {...link}
              onClick={() => setIsSidebarOpen(false)}
            />
          ))}
        </ul>

        <div className="flex flex-col gap-2">
          <div className="ml-auto">
            <button className="flex gap-2 hover:opacity-80 items-center p-2 bg-red-500 w-fit rounded-xl text-sm text-white">
              <span>
                <FaSignOutAlt />
              </span>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 flex justify-between dark:text-white items-center dark:bg-gray-800 border-t dark:border-gray-500 w-full p-2">
        <span className="text-sm">
          2024 &copy;{" "}
          <a
            href="/"
            className="focus:outline-none hover:underline text-blue-500"
          >
            Studysyncs
          </a>
        </span>
        <span className="flex gap-2">
          <a
            href="https://linked.in/in/vasudevshetty"
            className="focus:outline-none"
            target="_blank"
          >
            <img
              src="https://github.com/vasudevshetty.png"
              alt="Contributor"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thejas-c-10b3a0259/"
            className="focus:outline-none"
            target="_blank"
          >
            <img
              src="https://github.com/thejas027.png"
              alt="Contributor"
              className="h-8 w-8 rounded-full"
            />
          </a>
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
