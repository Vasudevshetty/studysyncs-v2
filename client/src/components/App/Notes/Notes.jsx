import { useState } from "react";
import { subjects } from "@/constants/user";
import NotesOptions from "./NotesOptions";
import ResourceIcons from "./ResourceIcons";
import { FaAngleLeft } from "react-icons/fa";
import Subject from "./Subject";
import SubjectList from "./SubjectList";

function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <section className="p-2 ">
      <ResourceIcons />
      <div className="flex gap-2 max-lg:flex-col resources transition-all h-[1100px] lg:h-screen">
        {/* Subjects Sidebar */}
        <div
          className={`flex flex-col gap-2 bg-white dark:bg-gray-400 rounded-xl items-center transition-all duration-700 ${
            selectedSubject
              ? "lg:w-2/5 xl:w-1/4 max-lg:h-1/4 lg:h-full"
              : "lg:w-3/5 xl:w-3/4 lg:h-full h-[450px]"
          }`}
        >
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
          <SubjectList
            subjects={subjects}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
          />
        </div>
        {/* Details Section */}
        <div
          className={`transition-transform duration-700 rounded-xl ${
            selectedSubject
              ? "lg:w-3/5 xl:w-3/4 max-lg:h-4/5 lg:h-full bg-white dark:bg-gray-400"
              : "lg:block xl:w-1/4 lg:w-2/5 h-[650px] lg:h-full"
          }`}
        >
          {selectedSubject ? (
            <Subject subject={subjects[selectedSubject]} />
          ) : (
            <NotesOptions />
          )}
        </div>
      </div>
    </section>
  );
}

export default Notes;
