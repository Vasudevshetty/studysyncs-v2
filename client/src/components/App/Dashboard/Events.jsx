import { events } from "@/constants/user";
import { HiViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="bg-app-light-primary dark:bg-app-secondary w-full md:w-[50%] h-[50%] md:h-full rounded-xl p-2 flex flex-col ">
      <h1 className="text-2xl text-gray-800 font-bold dark:text-gray-200 px-4 py-2 flex items-center w-full justify-between">
        <Link
          to={"/app/events"}
          className="cursor-pointer p-2 rounded-full focus:outline-none"
        >
          Events
        </Link>
        <HiViewBoards />
      </h1>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto h-full w-full px-2">
        {events.map((event, index) => (
          <div
            className="flex items-center gap-5 w-full hover:bg-app-light-tertiary hover:dark:bg-app-secondary rounded-xl p-1 cursor-pointer"
            key={index}
          >
            <div className="bg-app-light-secondary dark:bg-app-tertiary dark:text-primary text-gray-800 rounded-lg font-bold text-center h-16 w-16 flex items-center flex-col justify-center">
              <span className="text-2xl">{event.date.split(" ")[0]}</span>
              <span className="text-sm">{event.date.split(" ")[1]}</span>
            </div>
            <div className="w-[80%]">
              <h1 className="text-lg font-bold dark:text-secondary">
                {event.title}
              </h1>
              <p className="text-gray-400 dark:text-secondary text-ellipsis line-clamp-3 text-xs">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
