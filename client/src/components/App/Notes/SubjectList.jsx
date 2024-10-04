import { FaFolder, FaFolderOpen } from "react-icons/fa";

function SubjectList({ subjects, selectedSubject, setSelectedSubject }) {
  return (
    <div
      className={`flex p-2 flex-wrap gap-2 overflow-y-auto items-center ${
        selectedSubject
          ? "justify-center flex-no-wrap"
          : "max-md:justify-center"
      }`}
    >
      {Object.keys(subjects).map((subject, index) => (
        <button
          key={index}
          onClick={() => setSelectedSubject(subject)}
          className={`flex items-center justify-center flex-col h-32 w-32 sm:w-40 sm:h-40 p-2 rounded-xl transition-all duration-500 ${
            selectedSubject === subject
              ? "bg-white scale-105 border-2 border-yellow-400"
              : "hover:bg-gray-300"
          }`}
        >
          <span className="text-6xl sm:text-8xl text-yellow-400 mb-2">
            {selectedSubject !== subject ? <FaFolder /> : <FaFolderOpen />}
          </span>
          <span className="w-full text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-auto hover:whitespace-normal hover:text-clip text-black">
            {subjects[subject].name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SubjectList;
