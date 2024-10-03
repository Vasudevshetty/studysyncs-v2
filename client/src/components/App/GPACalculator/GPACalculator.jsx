import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import Chart from "../Dashboard/Charts/Chart";
import CgpaChart from "../Dashboard/Charts/CgpaChart";
import { user } from "../../../constants/user";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

import { Link } from "react-router-dom";

function GPACalculator() {
  const cgpaHistory = [
    { semester: "1st", gpa: 9.0, cgpa: 9.0 },
    { semester: "2nd", gpa: 9.2, cgpa: 9.1 },
    { semester: "3rd", gpa: 9.3, cgpa: 9.2 },
    { semester: "4th", gpa: 9.4, cgpa: 9.3 },
    { semester: "1st", gpa: 9.0, cgpa: 9.0 },
    { semester: "2nd", gpa: 9.2, cgpa: 9.1 },
    { semester: "3rd", gpa: 9.3, cgpa: 9.2 },
  ];

  const totalCreditsCompleted = 120;
  const averageGPA = (
    cgpaHistory.reduce((sum, entry) => sum + entry.gpa, 0) / cgpaHistory.length
  ).toFixed(2);
  const highestGPA = Math.max(...cgpaHistory.map((entry) => entry.gpa));
  const totalSemesters = cgpaHistory.length;
  const gpaTrend =
    cgpaHistory[totalSemesters - 1].gpa > cgpaHistory[totalSemesters - 2].gpa
      ? "Increasing"
      : "Decreasing";

  const statistics = [
    { label: "Total Credits Completed", value: totalCreditsCompleted },
    { label: "Average GPA", value: averageGPA },
    { label: "Highest GPA", value: highestGPA },
    { label: "Total Semesters", value: totalSemesters },
    { label: "Current GPA Trend", value: gpaTrend },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        GPA & CGPA Calculator
      </h1>
      <div className="flex flex-col gap-6 lg:flex-row justify-evenly mb-6 items-center">
        <div className="flex gap-4 mb-4 md:mb-0">
          <div className="flex gap-6 items-center bg-green-500 p-4 rounded-lg shadow-md">
            <div className="flex items-center flex-col">
              <p className="text-white font-semibold">Your Current CGPA</p>
              <span className="text-white text-2xl">9.3</span>
            </div>
          </div>

          <div className="flex gap-6 items-center bg-yellow-500 p-4 rounded-lg shadow-md">
            <div className="flex items-center flex-col">
              <p className="text-white font-semibold">Your Current SGPA</p>
              <span className="text-white text-2xl">9.3</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <p className="text-lg font-semibold dark:text-white">
            Calculate your CGPA/SGPA here:
          </p>
          <div className="flex gap-2">
            <Link
              to="/app/calculate-gpa/sgpa"
              className="bg-orange-400 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-500 transition"
            >
              Calculate SGPA
            </Link>
            <Link
              to="/app/calculate-gpa/cgpa"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600 transition"
            >
              Calculate SGPA
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="overflow-hidden">
          <div className="max-h-  overflow-y-auto bg-white rounded-lg shadow-md dark:bg-gray-400">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700 dark:text-white">
              CGPA History
            </h2>
            {/* Set max height and enable scroll */}
            <table className="min-w-full ">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:text-white">
                    Semester
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:text-white">
                    GPA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:text-gray-300">
                    CGPA
                  </th>
                </tr>
              </thead>
              <tbody>
                {cgpaHistory.map((entry, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 ease-in-out"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {entry.semester}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {entry.gpa}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {entry.cgpa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Chart title="CGPA Analysis">
          <CgpaChart data={user.stats.cgpa} />
        </Chart>
      </div>
      {/* Stats */}
      <div className="flex gap-4 flex-col md:flex-col lg:flex-row">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 flex flex-col lg:w-1/2 dark:bg-gray-400   ">
          <div className="text-gray-700 mb-4">
            <p className="text-lg sm:text-2xl font-bold tracking-wide mb-4 uppercase dark:text-white">
              Statistics
            </p>
            <div className="flex flex-col text-sm sm:text-xl gap-3 mb-4">
              {statistics.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-4 9H8v-2h4v4H8v-2zm8-2h-4v-2h4v2zm-4-4h-2V8h2v2zm4 8h-4v-2h4v2z" />
                  </svg>
                  <span className="font-medium text-gray-600 dark:text-black">
                    {stat.label}:{" "}
                    <span className="font-semibold   dark:text-black">
                      {stat.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 flex flex-col items-center lg:w-1/2 text-center dark:bg-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-white">
            Get Started on Your GPA Journey!
          </h2>
          <p className="text-gray-600 mb-4 dark:text-black font-medium">
            Track your GPA and CGPA to unlock your academic potential. Start
            calculating to visualize your progress!
          </p>

          <div className="flex flex-col items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 dark:text-white">
              Helpful Tips:
            </h3>
            <ul className="list-disc list-inside text-left dark:text-black">
              <li>Attend all your classes.</li>
              <li>Participate in study groups.</li>
              <li>Seek help from professors when needed.</li>
            </ul>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => console.log("Navigate to calculation form")} // Add your navigation logic here
          >
            Start Calculating . . .
          </button>
        </div>
      </div>
    </div>
  );
}

export default GPACalculator;
