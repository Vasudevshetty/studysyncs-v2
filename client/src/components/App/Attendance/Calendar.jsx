import { createDefaultAttendanceRecord, user } from "@/constants/user";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Calendar({ setAttendanceRecord }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleOnSelect(date) {
    setSelectedDate(date);
    const record =
      user.attendanceRecord.find(
        (record) => new Date(record.date).toDateString() === date.toDateString()
      ) || createDefaultAttendanceRecord(date);
    setAttendanceRecord(record); // Use the found record
  }

  return (
    <div className="lg:w-fit w-full flex items-center justify-evenly max-[400px]:flex-col-reverse gap-2">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleOnSelect} // Call handleOnSelect directly
        disabled={{
          after: new Date(),
          before: new Date(user.timetable.start), // No need for spread operator
        }}
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
