/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { tabs } from "@/constants/ui";

function TabsPopover() {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const containerRef = useRef(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  // Close the popover if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleSetSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className="relative flex h-fit gap-2">
      {tabs.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            <t.icon />
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && (
          <Content
            dir={dir}
            selected={selected}
            handleSetSelected={handleSetSelected}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default TabsPopover;

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full p-2 sm:text-xl transition-colors ${
        selected === tab
          ? " bg-gray-800 dark:bg-gray-300 dark:text-gray-800 text-gray-300"
          : "text-gray-800 dark:text-gray-300"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir, handleSetSelected }) => {
  const contentRef = useRef(null);

  // Keep content open when hovering
  useEffect(() => {
    const handleMouseEnter = () => {
      handleSetSelected(selected);
    };

    const handleMouseLeave = () => {
      handleSetSelected(null);
    };

    if (contentRef.current) {
      contentRef.current.addEventListener("mouseenter", handleMouseEnter);
      contentRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("mouseenter", handleMouseEnter);
        contentRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [selected, handleSetSelected]);

  return (
    <motion.div
      ref={contentRef}
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute right-0 top-[calc(100%_+_24px)] w-64 md:w-96 h-64 overflow-y-auto rounded-lg border border-gray-300 bg-gradient-to-b from-gray-300 via-neutral-200 to-neutral-300 p-4 dark:border-gray-600  dark:from-gray-800 dark:via-gray-800 dark:to-gray-800"
    >
      <Bridge />
      <Nub selected={selected} />

      {tabs.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-2">
                  {t.content.map((resource, index) => (
                    <t.Component resource={resource} key={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border dark:border-gray-300 dark:bg-gray-200 border-gray-300 bg-gray-100"
    />
  );
};
