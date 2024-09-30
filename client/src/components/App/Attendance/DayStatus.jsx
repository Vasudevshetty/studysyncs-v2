import { useState } from "react";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function DayStatus() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = selectedDate
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(", ");

  return (
    <div className="flex p-2 gap-2 lg:flex-row flex-col w-full items-center lg:h-[300px]">
      <div className="flex-1 rounded-xl bg-white dark:bg-gray-400 max-lg:w-full h-full">
        <div className="flex p-2 items-center">
          <div className="flex gap-2 p-2 w-full items-baseline max-lg:h-[350px]">
            <span className="text-xl lg:text-3xl text-black dark:text-white font-semibold">
              {formattedDate[0]},
            </span>
            <span className="dark:text-black text-xs">
              <span className="text-xl">{formattedDate[1].split(" ")[1]} </span>
              {formattedDate[1].split(" ")[0]},{formattedDate[2]}
            </span>
          </div>
          <Link
            className="items-center gap-2 p-2 h-10 bg-red-500 text-white rounded-xl w-fit group hidden lg:flex"
            to="timetable"
          >
            <span>
              <FaCalendarAlt />
            </span>
            <span>Timetable</span>
          </Link>
        </div>
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
}

export default DayStatus;
