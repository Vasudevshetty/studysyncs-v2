import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [branches] = useState([
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics Engineering",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (downloads < 10) setDownloads((prev) => prev + 1);
      if (users < 20) setUsers((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [downloads, users]);

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center sm:items-start sm:justify-around px-6 sm:px-16 dark:bg-gray-800 dark:text-white ">
      {/* left side */}
      <div className="flex flex-col sm:gap-8 gap-4 sm:w-2/3 w-full sm:mt-5">
        <h1 className="font-bold text-3xl sm:text-4xl leading-tight tracking-widest text-center sm:text-left">
          Unlock Academic Resources Seamlessly
        </h1>
        <p className="text-sm sm:text-base tracking-wide font-medium text-center sm:text-left">
          No more hunting for resources. Get curated materials for every
          subject, from beginner to advanced levels. Whether you need detailed
          explanations, practice questions, solved examples, or previous years
          papers, you will find all the essential resources designed to make
          your learning experience smoother and more effective. Stay organized
          and focus on what matters most—your studies.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link to="/signup">
            <button className="border bg-yellow-300 dark:bg-gray-600 py-3 px-5 rounded-lg hover:bg-yellow-400 transition-all">
              Join Us Now
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-6">
          <p className="text-center sm:text-left font-semibold mb-4">
            Stats Section
          </p>

          <div className="sm:flex sm:justify-around ">
            {/*  */}
            <div className="flex flex-row sm:flex-col justify-around  sm:gap-4 mb-4">
              <div className="border h-32 w-32 sm:h-48 sm:w-48 text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300 flex items-center justify-center rounded-md">
                <span className="sm:text-3xl font-semibold text-sm">
                  {" "}
                  {downloads}+
                </span>{" "}
                downloads
              </div>

              <div className="border h-32 w-32 sm:h-48 sm:w-48 text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300 flex items-center justify-center rounded-md">
                <span className="sm:text-3xl font-semibold text-sm">
                  {users}+
                </span>
                users
              </div>
            </div>
            {/*  */}
            <div className="border h-48 w-full sm:h-[55vh] sm:w-[70vh] text-xs text-center sm:text-lg dark:bg-gray-600 bg-yellow-300  rounded-md">
              <p className="font-bold uppercase text-sm mt-1 sm:text-lg sm:mt-7">
                Resources available on these branches,
              </p>
              <ul className="sm:flex sm:flex-col sm:mt-4 gap-5  text-xs p-3 sm:text-lg">
                {branches.map((branch, index) => (
                  <li className="p-1" key={index}>
                    {branch}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* developed */}
      <div className="w-full sm:w-64 h-auto sm:h-screen flex flex-col gap-6 p-4 sm:p-0 sm:border-l sm:px-2">
        <p className="font-bold text-center sm:text-left">Developed by,</p>

        <div className="flex sm:flex-col gap-8 sm:gap-4 justify-center sm:justify-start items-center">
          <div className="w-64 sm:mt-5 sm:ml-20 flex flex-col items-center sm:items-start">
            <img
              src="https://avatars.githubusercontent.com/u/128402167?v=4"
              alt="Thejas"
              className="rounded-full h-24 w-24"
            />
            <h4 className="text-center sm:text-left">Thejas</h4>
            <p className="text-sm flex flex-col gap-2 font-semibold tracking-wider">
              <span className="flex gap-2 items-center">
                <FaGraduationCap size={24} /> Sjce, Mysore
              </span>
              <span className="flex gap-2 items-center">
                <FaLinkedin size={24} /> <a href="#">Linkedin</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaGithub size={24} /> <a href="#">Github</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaInstagram size={24} /> <a href="#">instagram</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaEnvelope size={22} /> <a href="#">Email</a>
              </span>
            </p>
          </div>

          <div className="w-64 sm:mt-10 sm:ml-20 flex flex-col items-center sm:items-start">
            <img
              src="https://avatars.githubusercontent.com/u/121664018?v=4"
              alt="Vasudev"
              className="rounded-full h-24 w-24"
            />
            <h4 className="text-center sm:text-left">Vasudev</h4>
            <p className="text-sm flex flex-col gap-2 font-semibold tracking-wider">
              <span className="flex gap-2 items-center">
                <FaGraduationCap size={24} /> Sjce, Mysore
              </span>
              <span className="flex gap-2 items-center">
                <FaLinkedin size={24} /> <a href="#">Linkedin</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaGithub size={24} /> <a href="#">Github</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaInstagram size={24} /> <a href="#">instagram</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaEnvelope size={22} /> <a href="#">Email</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
