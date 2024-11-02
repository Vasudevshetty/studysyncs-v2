import { contributors, links } from "@/constants/ui";
import LinkItem from "./LinkItem";
import { useEffect, useRef, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const sidebarRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const location = useLocation();

  // Close sidebar on outside click
  useEffect(() => {
    function handleOverlayClick(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOverlayClick);
    return () => document.removeEventListener("mousedown", handleOverlayClick);
  }, [sidebarRef, setIsSidebarOpen]);

  // Handle swipe to close
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-16 left-2 h-[calc(100vh-4.5rem)] z-40 rounded-2xl w-64  bg-app-light-primary dark:border-gray-700 sm:translate-x-0 transition-transform ${
        isSidebarOpen
          ? "translate-x-0 dark:bg-[#001f34] "
          : "-translate-x-[110%] dark:bg-app-secondary"
      }`}
      ref={sidebarRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="flex-1 px-3 py-2 overflow-y-auto h-full flex flex-col justify-between">
        <div className="flex flex-col justify-between h-[90%]">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <LinkItem
                key={index}
                {...link}
                isActive={location.pathname === link.link}
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

        <div className="flex justify-between dark:text-white items-center border-t dark:border-gray-500 w-full p-2">
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
            {contributors.map((contributor, index) => (
              <a
                href={contributor.href}
                className="focus:outline-none"
                key={index}
                target="_blank"
              >
                <img
                  src={contributor.pic}
                  alt="Contributor"
                  className="h-8 w-8 rounded-full"
                />
              </a>
            ))}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
