import { useEffect, useState } from "react";
import { FaFile, FaFileWord } from "react-icons/fa";
import Chapter from "./Chapter";

function Subject({ subject }) {
  const [selectedChapter, setSelectedChapter] = useState(subject.chapters[0]);

  // Update the selectedChapter when subject changes
  useEffect(() => {
    setSelectedChapter(subject.chapters[0]);
  }, [subject]);

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-sm sm:text-2xl p-4 rounded-t-xl bg-gray-800 dark:bg-gray-600 text-gray-300 ">
        {subject.name}
      </h1>
      <div className="flex-1 flex items-start gap-4 h-[90%] max-xl:flex-col p-2">
        {/* Chapter List */}
        <div className="flex flex-wrap gap-4 w-1/4 p-2 items-center h-full overflow-y-auto max-xl:w-full max-xl:h-1/3 justify-center max-sm:h-1/4">
          {subject.chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setSelectedChapter(chapter)}
              className={`flex items-center justify-evenly flex-col min-h-32 sm:min-h-40 w-32 sm:w-40 p-2 rounded-xl transition-all duration-500 ${
                selectedChapter === chapter
                  ? "bg-white scale-105 border-2 border-yellow-400"
                  : "hover:bg-gray-300"
              }`}
            >
              <span className="text-5xl sm:text-8xl text-yellow-400 mb-2">
                {selectedChapter !== chapter ? <FaFile /> : <FaFileWord />}
              </span>
              <span className="w-full text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-auto hover:whitespace-normal hover:text-clip text-black">
                {chapter.name}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Chapter Content */}
        <div className="w-3/4 h-full rounded-xl max-xl:w-full max-xl:h-2/3 max-sm:h-3/4">
          <Chapter chapter={selectedChapter} />
        </div>
      </div>
    </div>
  );
}

export default Subject;
