import { user } from "@/constants/user";
import { FaReceipt } from "react-icons/fa";
import { FiBook, FiCalendar, FiPlusSquare } from "react-icons/fi";

function History() {
  return (
    <div className="flex-1 rounded-xl p-2 bg-white dark:bg-gray-400 flex flex-col">
      <h1 className="text-3xl p-2 text-black font-semibold dark:text-white">
        History
      </h1>
      <div className="flex-1 bg-gray-300 dark:bg-gray-800 p-2 rounded-xl">
        <h1 className="grid grid-cols-8 px-5 py-2">
          <p className="flex gap-2 items-center dark:text-gray-300 text-gray-800 col-span-1">
            Date
            <span>
              <FiCalendar />
            </span>
          </p>
          <p className="flex gap-2 items-center dark:text-gray-300 text-gray-800 col-span-4">
            Classes
            <span>
              <FiBook />
            </span>
          </p>
          <p className="flex gap-2 items-center dark:text-gray-300 text-gray-800 col-span-1">
            Extra
            <span>
              <FiPlusSquare />
            </span>
          </p>
          <p className="flex gap-2 items-center dark:text-gray-300 text-gray-800 col-span-2">
            Status
            <span>
              <FaReceipt />
            </span>
          </p>
        </h1>
        <ul className="overflow-y-auto flex flex-col gap-2">
          {user.attendanceRecord.map((record, index) => (
            <li
              key={index}
              className="bg-gray-800 p-2 rounded-xl grid grid-cols-8 dark:bg-gray-300"
            >
              <span className="h-14 w-14 rounded-xl text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-300 col-span-1 flex items-center justify-center">
                {new Date(record.date)
                  .toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                  .split(", ")[0]
                  .slice(0, 3)}
              </span>

              <div className="col-span-4 p-2 flex items-center gap-2 flex-wrap overflow-y-auto"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default History;
