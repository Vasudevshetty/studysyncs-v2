import { links } from "@/constants";
import LinkItem from "./LinkItem";
import { useEffect, useRef } from "react";

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
      className={`fixed top-0 left-0 z-40 h-full pt-[4.5rem] w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={sidebarRef}
    >
      <div className="px-3 py-2 overflow-y-auto h-full flex flex-col justify-between">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <LinkItem
              key={index}
              {...link}
              onClick={() => setIsSidebarOpen(false)}
            />
          ))}
        </ul>

        <div>
          <span className="text-gray-500 text-xs">Studysyncs &copy;2024.</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
