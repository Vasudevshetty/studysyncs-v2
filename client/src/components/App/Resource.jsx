import { FaFilePdf, FaFilePowerpoint, FaTrashAlt } from "react-icons/fa";

export function Resource({ resource }) {
  return (
    <div className="flex items-center w-full hover:bg-gray-200 hover:dark:bg-app-tertiary rounded-xl p-2 justify-between">
      <div className="flex gap-2 lg:gap-5 items-center cursor-pointer">
        <span className="text-2xl">
          {resource.type == "pdf" ? (
            <FaFilePdf className="text-red-500" />
          ) : (
            <FaFilePowerpoint className="text-red-300" />
          )}{" "}
        </span>
        <p className="text-secondary text-xs">{resource.name}</p>
      </div>
      <div className="flex gap-3 text-secondary">
        <div className="flex flex-col text-[8px] items-center justify-center">
          <span>{resource.size}</span>
          <span>{resource.date}</span>
        </div>
        <button className="focus:outline-none p-2 rounded-full hover:bg-gray-400 hover:text-gray-800">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}
