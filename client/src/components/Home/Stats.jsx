import { useEffect, useState } from "react";

function Stats() {
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [visibleBranches, setVisibleBranches] = useState([]);
  const [branches] = useState([
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics Engineering",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (downloads < 20) setDownloads((prev) => prev + 1);
      if (users < 30) setUsers((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [downloads, users]);

  useEffect(() => {
    let index = 0;
    const branchInterval = setInterval(() => {
      setVisibleBranches((prev) => {
        const newBranches = [...prev];
        newBranches[index] = branches[index];
        index = (index + 1) % branches.length;
        return newBranches;
      });
    }, 500);

    return () => clearInterval(branchInterval);
  }, [branches]);

  return (
    <div className="">
      <div className="mt-6">
        <div className="sm:flex sm:justify-around gap-10 p-5">
          {/* Stats Section */}
          <div className="flex flex-row sm:flex-col justify-around gap-4 mb-4">
            <div className="border h-32 w-32 sm:h-48 sm:w-48 text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300 flex items-center justify-center rounded-md">
              <span className="sm:text-3xl font-semibold text-sm">
                {downloads}+
              </span>
              downloads
            </div>

            <div className="border h-32 w-32 sm:h-48 sm:w-48 text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300 flex items-center justify-center rounded-md">
              <span className="sm:text-3xl font-semibold text-sm">
                {users}+
              </span>
              users
            </div>
          </div>
          {/* Resources Section */}
          <div className="border h-auto w-full text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300 rounded-md">
            <p className="font-bold uppercase text-sm mt-1 sm:text-base sm:px-2 sm:mt-7">
              Resources available in these branches:
            </p>
            <ul className="sm:flex sm:flex-col sm:mt-4 gap-5 text-xs p-3 sm:text-lg">
              {branches.map((branch, index) => (
                <li
                  key={index}
                  className={`p-1 ${
                    visibleBranches[index] ? "block" : "hidden"
                  }`}
                >
                  {branch}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
