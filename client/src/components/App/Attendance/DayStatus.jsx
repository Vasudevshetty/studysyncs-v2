import { useState } from "react";
import Calendar from "./Calendar";
import { DayHeader } from "./DayHeader";
import AttendanceCard from "./AttendanceCard";
import { createDefaultAttendanceRecord, user } from "@/constants/user";
import { attendanceOptions } from "@/constants/ui";

function DayStatus() {
  const [attendanceRecord, setAttendanceRecord] = useState(
    user.attendanceRecord.find(
      (record) =>
        new Date(record.date).toDateString() === new Date().toDateString()
    ) || createDefaultAttendanceRecord(new Date())
  );
  const noClasses =
    attendanceRecord?.classes?.length == 0 &&
    attendanceRecord?.extraClasses?.length == 0;
  console.log(attendanceRecord);

  function uploadHandler() {}
  function extraClassHandler() {}

  function resetHandler() {
    setAttendanceRecord((prev) => ({
      ...prev,
      classes: prev.classes.map((classItem) => ({
        ...classItem,
        status: "", // Resetting the status field to an empty string
      })),
      extraClasses: prev.extraClasses.map((extraClassItem) => ({
        ...extraClassItem,
        status: "", // Resetting the status field to an empty string
      })),
    }));
  }

  const handleStatusChange = (slug, newStatus) => {
    setAttendanceRecord((prev) => ({
      ...prev,
      classes: prev.classes.map((classItem) =>
        classItem.slug === slug
          ? classItem.status === newStatus
            ? { ...classItem, status: "" }
            : { ...classItem, status: newStatus }
          : classItem
      ),
      extraClasses: prev.extraClasses.map((extraClassItem) =>
        extraClassItem.slug === slug
          ? extraClassItem.status === newStatus
            ? { ...extraClassItem, status: "" }
            : { ...extraClassItem, status: newStatus }
          : extraClassItem
      ),
    }));
  };

  function buttonHandler(name) {
    switch (name.toLowerCase()) {
      case "upload":
        uploadHandler();
        break;
      case "extra class":
        extraClassHandler();
        break;
      case "reset":
        resetHandler();
        break;
    }
  }

  const formattedDate = new Date(attendanceRecord.date)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(", ");

  return (
    <div className="flex p-2 gap-2 lg:flex-row sm:flex-col flex-col-reverse w-full items-center lg:max-h-[500px]">
      <div className="flex-1 rounded-xl bg-white dark:bg-gray-400 max-lg:w-full h-full flex flex-col">
        <DayHeader formattedDate={formattedDate} />
        <div className="p-2 flex-1 resources flex gap-2 md:flex-row flex-col">
          <div className="md:w-[85%] flex flex-col gap-2">
            <div className="p-2 flex flex-col dark:bg-gray-600 bg-gray-300 h-[300px] rounded-xl">
              <h1 className="text-lg lg:text-2xl text-center text-black dark:text-white font-semibold">
                Classes today !
              </h1>
              <div className="p-2 flex max-[450px]:items-center max-[450px]:justify-center gap-4 flex-wrap h-[300px] rounded-xl overflow-y-auto">
                {noClasses && <div>No classes today...</div>}
                {!noClasses &&
                  attendanceRecord?.["classes"]?.map((period, index) => (
                    <AttendanceCard
                      key={index}
                      period={period}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
                {!noClasses &&
                  attendanceRecord?.["extraClasses"]?.map((period, index) => (
                    <AttendanceCard
                      key={index}
                      period={period}
                      isExtraClass={true}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="flex md:flex-col gap-3 max-[325px]:flex-col items-center justify-center lg:w-[25%] ">
            {attendanceOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => buttonHandler(option.name)}
                className={`${option.color} w-[80%] hover:opacity-80 active:translate-y-1 transition-transform duration-75 h-fit flex p-2 rounded-xl text-white gap-2 items-center justify-center`}
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
