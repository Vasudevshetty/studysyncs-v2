import { user } from "@/constants";
import TypingAnimation from "../../ui/typing-animation";
import Stats from "./Stats";
import User from "./User";
import CgpaChart from "./Charts/CgpaChart";
import AttendSummaryChart from "./Charts/AttendSummaryChart";
import AttendanceChart from "./Charts/AttendanceChart";
import Chart from "./Charts/Chart";
import Resources from "./Resources";
import Events from "./Events";

function Dashboard() {
  return (
    <section className="p-2 flex flex-col gap-4">
      <div className="flex bg-white dark:bg-gray-400 rounded-xl p-2 lg:flex-row flex-col">
        <div className="flex-1 flex flex-col">
          <div className="text-gray-400 text-2xl py-3 px-5 gap-2 items-center dark:text-gray-800">
            Good Morning,{" "}
            <TypingAnimation
              className="text-gray-800 text-3xl font-bold dark:text-gray-200"
              text={user.name}
            />
          </div>
          <div className="flex justify-evenly gap-3 p-2 px-3 items-center flex-row">
            <Stats title="Bookmark" stat={user.bookmarks.length} />
            <Stats title="Downloads" stat={user.downloads.length} />
            <Stats title="Friends" stat={user.friends.length} />
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col sm:flex-row gap-4">
          <div className="flex items-center justify-center gap-2 flex-col bg-gray-300 dark:bg-gray-600 rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 dark:text-gray-300">
            <h1 className="text-1xl md:text-3xl lg:text-4xl">Sem</h1>
            <p className="sm:text-5xl md:text-6xl text-3xl">
              <span className="sm:text-7xl md:text-8xl text-5xl font-bold text-gray-800 dark:text-white">
                {user.semester}
              </span>
              /8
            </p>
          </div>
          <User user={user} />
        </div>
      </div>
      <div className="flex flex-col-reverse xl:flex-row items-start justify-center gap-2 pb-2">
        <div className="flex-1 w-full flex items-center justify-center flex-col gap-2">
          <Chart title="Attendance Status">
            <AttendanceChart data={user.stats.attendance} />
          </Chart>
          <div className="flex flex-col gap-2 w-full h-[800px] md:w-full md:h-[400px] md:flex-row resources">
            <Resources bookmarks={user.bookmarks} downloads={user.downloads} />
            <Events />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-col xl:w-[33%] w-full gap-2 max-sm:pb-2">
          <Chart title="CGPA Analysis">
            <CgpaChart data={user.stats.cgpa} />
          </Chart>
          <Chart title="Attendance Summary">
            <AttendSummaryChart data={user.stats.attendanceSummary} />
          </Chart>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
