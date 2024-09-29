import { subjects } from "@/constants";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlineCheck, HiOutlineXCircle } from "react-icons/hi";

function EditPool({ setIsEditing }) {
  return (
    <div className="w-full max-sm:h-[450px] xl:w-[30%] lg:w-[40%] p-2 flex flex-col gap-2">
      <div className="h-[60%] w-full bg-white dark:bg-gray-400 rounded-xl flex flex-col p-2">
        <h1 className="p-2 text-2xl text-center text-black dark:text-white font-bold">
          Available Subjects
        </h1>
        <div className="flex-1 bg-gray-300 rounded-xl">
          <div className="flex-1 flex gap-3 p-2 flex-wrap overflow-y-auto">
            {Object.keys(subjects).map((subject, index) => (
              <span
                className={`max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${subjects[subject].color} text-white rounded-full uppercase font-bold cursor-pointer`}
                key={index}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-between p-2 mt-auto">
          {[
            {
              icon: HiOutlineCheck,
              option: "Done",
              color: "bg-green-500",
              onClick: () => setIsEditing(false),
            },
            {
              icon: HiOutlineXCircle,
              option: "Cancel",
              color: "bg-yellow-500",
              onClick: () => setIsEditing(false),
            },
          ].map((option, index) => (
            <button
              className={`flex items-center gap-2 p-2 ${option.color} rounded-xl text-white text-sm`}
              key={index}
              onClick={option.onClick}
            >
              {option.option}
              <span className="text-xl">
                <option.icon />
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="h-[40%] w-full bg-red-500 bg-opacity-60 backdrop-blur-3xl rounded-xl p-3 hover:opacity-80">
        <div className="h-full w-full border-2 border-dashed p-2 flex items-center justify-center cursor-pointer border-gray-600 dark:border-gray-300">
          <span className="text-3xl text-white">
            <FaTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
}

export default EditPool;
