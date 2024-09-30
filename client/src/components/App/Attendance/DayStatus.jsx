import { useState } from "react";
import Calendar from "./Calendar";
import {
  attendanceOptions,
  attendanceRecord as initialAttendanceRecord,
} from "@/constants";
import { DayHeader } from "./DayHeader";
import AttendanceCard from "./AttendanceCard";

function DayStatus() {
  const [attendanceRecord, setAttendanceRecord] = useState(
    initialAttendanceRecord.find(
      (record) =>
        new Date(record.date).toDateString() === new Date().toDateString()
    )
  );
  console.log(attendanceRecord);
  const formattedDate = new Date(attendanceRecord.date)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(", ");

  return (
    <div className="flex p-2 gap-2 lg:flex-row flex-col w-full items-center md:max-h-[500px]">
      <div className="flex-1 rounded-xl bg-white dark:bg-gray-400 max-lg:w-full h-full flex flex-col">
        <DayHeader formattedDate={formattedDate} />
        <div className="p-2 flex-1 resources flex gap-2 md:flex-row flex-col">
          <div className="md:w-[85%] flex flex-col gap-2">
            <h1 className="text-2xl text-center text-black font-semibold">
              Classes today !
            </h1>
            <div className="p-2 flex max-[450px]:items-center max-[450px]:justify-center gap-2 flex-wrap dark:bg-gray-600 bg-gray-300 h-[300px] rounded-xl overflow-y-auto">
              {attendanceRecord?.["classes"]?.map((period, index) => (
                <AttendanceCard key={index} period={period} />
              ))}
            </div>
          </div>
          <div className="flex md:flex-col gap-3 max-[325px]:flex-col items-center justify-center lg:w-[25%] ">
            {attendanceOptions.map((option, index) => (
              <button
                key={index}
                className={`${option.color} w-[80%] h-fit flex p-2 rounded-xl text-white gap-2 items-center justify-center`}
              >
                {option.name}
                <span>
                  <option.icon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Calendar setAttendanceRecord={setAttendanceRecord} />
    </div>
  );
}

export default DayStatus;
