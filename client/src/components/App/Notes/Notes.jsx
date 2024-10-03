import { useState } from "react";
import { subjects } from "@/constants/user";
import NotesOptions from "./NotesOptions";
import ResourceIcons from "./ResourceIcons";
import { FaAngleLeft, FaFolder, FaFolderOpen } from "react-icons/fa";

function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  function Header() {
    return (
      <div className="w-full flex bg-gray-800 rounded-t-xl items-center text-gray-300 dark:bg-gray-600 text-center gap-2 text-sm sm:text-2xl p-2">
        {selectedSubject && (
          <span
            className="cursor-pointer hover:bg-gray-300 rounded-full p-1 hover:text-gray-800"
            onClick={() => setSelectedSubject(null)}
          >
            <FaAngleLeft />
          </span>
        )}
        <span className="p-2">Subjects</span>
      </div>
    );
  }

  return (
    <section className="p-2 ">
      <ResourceIcons />
      <div className="flex gap-2 max-lg:flex-col resources transition-all h-[800px] lg:h-[650px]">
        {/* Subjects Sidebar */}
        <div
          className={`flex flex-col gap-2 bg-white dark:bg-gray-400 rounded-xl items-center transition-all duration-700 ${
            selectedSubject
              ? "lg:w-2/5 xl:w-1/4 max-lg:h-2/5 lg:h-full"
              : "lg:w-3/5 xl:w-3/4 lg:h-full h-[450px]"
          }`}
        >
          <Header />
          <div
            className={`flex p-2 flex-wrap gap-2 overflow-y-auto items-center ${
              selectedSubject
                ? "lg:justify-center flex-no-wrap"
                : "max-md:justify-center"
            }`}
          >
            {Object.keys(subjects).map((subject, index) => (
              <button
                key={index}
                onClick={() => handleSubjectClick(subject)}
                className={`flex items-center justify-center flex-col h-32 w-32 sm:w-40 sm:h-40 p-2 rounded-xl transition-all duration-500 ${
                  selectedSubject === subject
                    ? "bg-white scale-105 border-2 border-yellow-400"
                    : "hover:bg-gray-300"
                }`}
              >
                <span className="text-6xl sm:text-8xl text-yellow-400 mb-2">
                  {selectedSubject !== subject ? (
                    <FaFolder />
                  ) : (
                    <FaFolderOpen />
                  )}
                </span>
                <span className="w-full text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-auto hover:whitespace-normal hover:text-clip text-black">
                  {subjects[subject].name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div
          className={`transition-transform duration-700 rounded-xl ${
            selectedSubject
              ? "lg:w-3/5 xl:w-3/4 max-lg:h-3/5 lg:h-full bg-white dark:bg-gray-400"
              : "lg:block xl:w-1/4 lg:w-2/5 lg:h-full"
          }`}
        >
          {selectedSubject ? (
            <div className="p-2">
              <h2 className="text-2xl mb-4">
                {subjects[selectedSubject].name} - Details
              </h2>
              {/* Render subject-specific data here */}
              <p>
                Here is some information about the subject: {selectedSubject}
              </p>
            </div>
          ) : (
            <NotesOptions />
          )}
        </div>
      </div>
    </section>
  );
}

export default Notes;
