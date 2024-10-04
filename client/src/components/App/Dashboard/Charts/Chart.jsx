import { Link } from "react-router-dom";

function Chart({ title, children }) {
  function getLink() {
    if (title.match("Attendance")) return "/app/attendance";
    else return "/app/calculate-gpa";
  }

  return (
    <div className="bg-white dark:bg-gray-400 rounded-xl w-full flex items-center justify-center flex-col">
      <Link
        to={getLink()}
        className="focus:outline-none text-center text-2xl text-gray-800 font-bold dark:text-gray-200 pt-4"
      >
        {title}
      </Link>
      <div
        className="flex-1 w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}

export default Chart;
