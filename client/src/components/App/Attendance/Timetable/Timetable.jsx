import { subjects, timetable } from "@/constants";
import TableHeader from "./TableHeader";
import { FaPencilAlt } from "react-icons/fa";
import Subjects from "./Subjects";
import EditPool from "./EditPool";
import { useState } from "react";

function Timetable() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 flex flex-col p-2">
      <TableHeader
        {...timetable}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <div className="rounded-xl flex max-lg:flex-col gap-2">
        <div className="flex-1 p-2 flex flex-col gap-2 lg:w-[60%] xl:w-[70%]">
          {Object.keys(timetable.weekdays).map((day, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-400 pl-2 rounded-xl flex gap-3 max-sm:h-20 h-24 items-center"
            >
              <div className="p-1 bg-blue-500 min-w-12 h-12 text-white capitalize flex items-center justify-center rounded-xl">
                {day}
              </div>
              <div className="flex-1 flex gap-2 border-l overflow-x-hidden hover:overflow-x-auto px-2 h-full items-center">
                {timetable.weekdays[day].map((period, index) => (
                  <div
                    key={index}
                    className={`p-1 rounded-full max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${period.color} text-white`}
                  >
                    <span className="uppercase font-bold">{period.slug}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!isEditing ? <Subjects /> : <EditPool setIsEditing={setIsEditing} />}
      </div>
    </div>
  );
}

export default Timetable;
