import TypingAnimation from "../../ui/typing-animation";
import Stats from "./Stats";
import User from "./User";
import CgpaChart from "./Charts/CgpaChart";
import AttendSummaryChart from "./Charts/AttendSummaryChart";
import AttendanceChart from "./Charts/AttendanceChart";
import Chart from "./Charts/Chart";
import Resources from "./Resources";
import Events from "./Events";
import { user } from "@/constants/user";
import { useAuth } from "@/context/authContext";

function Dashboard() {
  const { user: userRemote } = useAuth();

  console.log(userRemote);
  function getGreetingMessage() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning, ";
    } else if (hour < 18) {
      return "Good Afternoon, ";
    } else {
      return "Good Evening, ";
    }
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex bg-app-light-primary dark:bg-app-secondary rounded-xl p-2 lg:flex-row flex-col gap-2">
        <div className="flex-1 flex flex-col">
          <div className="text-gray-400 text-xl sm:text-2xl py-3 px-5 gap-2 items-center dark:text-secondary">
            {getGreetingMessage()}
            <TypingAnimation
              className="text-gray-800 text-2xl sm:text-3xl font-bold dark:text-gray-200"
              text={user.name + " !"}
            />
          </div>
          <div className="grid justify-evenly gap-2 grid-cols-2 lg:grid-cols-4">
            <Stats title="Semester" stat={4} />
            <Stats title="Bookmark" stat={user.bookmarks.length} />
            <Stats title="Downloads" stat={user.downloads.length} />
            <Stats title="Friends" stat={user.friends.length} />
          </div>
        </div>
        <User user={userRemote} />
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
