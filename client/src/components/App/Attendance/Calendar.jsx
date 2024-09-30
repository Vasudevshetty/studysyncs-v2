import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="lg:w-fit w-full flex items-center justify-evenly max-[400px]:flex-col-reverse gap-2">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="dark:bg-gray-300 p-2 rounded-xl bg-gray-800 dark:text-black text-white border-2 border-gray-400 dark:border-gray-600"
      />
      <Link
        className="items-center gap-2 p-2 h-10 bg-red-500 text-white rounded-xl w-fit group flex lg:hidden"
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

export default Calendar;
