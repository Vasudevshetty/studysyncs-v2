import { periodOptions, statusColors } from "@/constants/ui";
import { user } from "@/constants/user";
import { useEffect, useState } from "react";

function AttendanceCard({ period, isExtraClass = false, onStatusChange }) {
  // eslint-disable-next-line
  const [attendanceValue, setAttendanceValue] = useState(() => {
    const seriesData = user.stats?.attendance?.series?.[0]?.data || [];
    const categories = user.stats?.attendance?.categories || [];
    const index = categories.findIndex((id) => id === period.slug);
    return index !== -1 ? seriesData[index] : 0;
  });

  const [animatedValue, setAnimatedValue] = useState(0);

  // Animation state for attendance percentage
  useEffect(() => {
    let start = 0;
    const end = attendanceValue;
    const duration = 1000; // 1 second animation
    const increment = end / (duration / 10);

    const animate = () => {
      start += increment;
      if (start < end) {
        setAnimatedValue(start);
        requestAnimationFrame(animate);
      } else {
        setAnimatedValue(end);
      }
    };
    requestAnimationFrame(animate);
  }, [attendanceValue]);

  const handleStatusChange = (newStatus) => {
    onStatusChange(period.slug, newStatus);
  };

  return (
    <div className="h-36 w-40 bg-gray-800 dark:bg-white rounded-xl items-center justify-between flex flex-col p-2 relative">
      {/* Attendance Info */}
      <div className="flex gap-2 items-center h-full w-full">
        <div className="flex flex-col justify-evenly h-full w-[calc(100%-4rem)]">
          {/* Period Name */}
          <span
            className={`h-6 w-fit p-1 rounded-full ${period.color} flex items-center justify-center text-white uppercase`}
          >
            {period.slug}
          </span>
          {/* Status */}
          <span
            className={`text-xs w-fit ${
              statusColors[period.status] || "bg-gray-500"
            } text-white px-2 py-1 rounded-full`} // Fallback color
          >
            {period.status}
          </span>
        </div>
        {/* Attendance Progress Indicator */}
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              className="text-gray-400"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="25"
              cx="32"
              cy="32"
            />
            <circle
              className="text-green-500"
              strokeWidth="5"
              strokeDasharray={`${animatedValue * 1.57}, 157`}
              strokeDashoffset="0"
              stroke="currentColor"
              fill="transparent"
              r="25"
              cx="32"
              cy="32"
              style={{ transition: "stroke-dasharray 1s ease-in-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-white dark:text-black">
              {Math.round(animatedValue)}%
            </span>
          </div>
        </div>
      </div>
      {/* Status Change Buttons */}
      <div className="flex items-center py-2 w-full justify-evenly gap-2 bg-gray-300/20 dark:bg-gray-800/20 rounded-xl">
        {periodOptions.map((option, index) => (
          <button
            key={index}
            className={`${option.color} p-2 rounded-full hover:bg-opacity-80 ${
              period.status !== option.status &&
              period.status !== "" &&
              "opacity-20 scale-30"
            }`}
            onClick={() => handleStatusChange(option.status)}
          >
            <span className="text-white">
              <option.icon />
            </span>
          </button>
        ))}
      </div>
      {isExtraClass && (
        <div className="absolute text-sm bg-yellow-500 rounded-full p-1 text-white h-7 w-12 flex items-center justify-center -top-2 -right-4">
          Extra
        </div>
      )}
    </div>
  );
}

export default AttendanceCard;
