import { FaCalendarWeek } from "react-icons/fa";
import { Link } from "react-router-dom";

function Attendance() {
  return (
    <section className="">
      <div className="p-2">
        <Link
          to="timetable"
          className="p-2 bg-red-500 rounded-xl text-white flex items-center gap-2 w-fit"
        >
          <span>
            <FaCalendarWeek />
          </span>
          timetable
        </Link>
      </div>
    </section>
  );
}

export default Attendance;
