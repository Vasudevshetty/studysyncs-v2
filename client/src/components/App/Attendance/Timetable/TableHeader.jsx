import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function TableHeader({ start, end, isEditing, setIsEditing }) {
  return (
    <div className="flex p-2">
      <div className="p-1 flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Timetable
        </h1>
        <div className="flex gap-1 sm:gap-2 items-center">
          <p className="text-[8px] sm:text-xs text-white bg-green-500 p-1 rounded-xl">
            {start}
          </p>
          <span>-</span>
          <p className="text-[8px] sm:text-xs text-white bg-red-500 p-1 rounded-xl">
            {end}
          </p>
        </div>
      </div>
      <div className="flex ml-auto items-center gap-2 flex-col sm:flex-row">
        {!isEditing && (
          <button
            className="flex items-center gap-2 p-2 text-sm sm:text-md sm:p-2 bg-green-500 text-white rounded-xl focus:outline-none hover:bg-green-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
            <span>
              <FaPencilAlt />
            </span>
          </button>
        )}
        <button className="flex items-center gap-2 bg-red-500 p-2 text-sm sm:text-md sm:p-2 text-white rounded-xl focus:outline-none hover:bg-red-600">
          Delete
          <span>
            <FaTrashAlt />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TableHeader;
