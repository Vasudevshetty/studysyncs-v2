import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function DayHeader({ formattedDate }) {
  return (
    <div className="flex p-2 items-center">
      <div className="flex gap-2 px-2 w-full items-baseline">
        <span className="text-xl lg:text-3xl text-black dark:text-white font-semibold">
          {formattedDate[0]},
        </span>
        <span className="dark:text-black text-xs">
          <span className="text-xl">{formattedDate[1].split(" ")[1]} </span>
          {formattedDate[1].split(" ")[0]}, {formattedDate[2]}
        </span>
      </div>
      <Link
        className="items-center gap-2 px-2 h-10 bg-red-500 text-white rounded-xl w-fit group hidden lg:flex"
        to="timetable"
      >
        <span>
          <FaCalendarAlt />
        </span>
        <span>Timetable</span>
      </Link>
    </div>
  );
}
