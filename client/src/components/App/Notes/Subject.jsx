import { useEffect, useState } from "react";
import { FaFile, FaFileWord } from "react-icons/fa";

function Subject({ subject }) {
  const [selectedChapter, setSelectedChapter] = useState(
    subject.chapters[0].name
  );

  // Update the selectedChapter when subject changes
  useEffect(() => {
    setSelectedChapter(subject.chapters[0].name);
  }, [subject]);

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-sm sm:text-2xl p-4 rounded-t-xl bg-gray-800 dark:bg-gray-600 text-gray-300 ">
        {subject.name}
      </h1>
      <div className="flex-1 flex items-start gap-4 h-[90%] max-xl:flex-col p-2">
        {/* Chapter List */}
        <div className="flex flex-wrap gap-2 w-1/4 p-2 items-center h-full overflow-y-auto max-xl:w-full max-xl:h-1/3 max-xl:justify-center max-sm:h-1/4">
          {subject.chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setSelectedChapter(chapter.name)}
              className={`flex items-center justify-evenly flex-col min-h-32 sm:min-h-40 w-32 sm:w-40 p-2 rounded-xl transition-all duration-500 ${
                selectedChapter === chapter.name
                  ? "bg-white scale-105 border-2 border-yellow-400"
                  : "hover:bg-gray-300"
              }`}
            >
              <span className="text-5xl sm:text-8xl text-yellow-400 mb-2">
                {selectedChapter !== chapter.name ? <FaFile /> : <FaFileWord />}
              </span>
              <span className="w-full text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-auto hover:whitespace-normal hover:text-clip text-black">
                {chapter.name}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Chapter Content */}
        <div className="w-3/4 h-full p-4 bg-gray-300 rounded-xl max-xl:w-full max-xl:h-2/3 max-sm:h-3/4">
          <h2 className="text-xl font-semibold mb-2">
            Chapter: {selectedChapter}
          </h2>
          <p className="text-black">
            {/* Placeholder for actual chapter content */}
            Content for {selectedChapter} will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subject;
