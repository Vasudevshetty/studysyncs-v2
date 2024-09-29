import { FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stats from "./Stats";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center sm:items-start sm:justify-around px-6 sm:px-16  dark:bg-gray-800 dark:text-white  rounded-lg ">
      {/* Left Side - Welcome Text */}
      <div className="flex-1 flex flex-col justify-center items-center sm:items-start px-4 sm:px-12">
        <h1 className="font-bold text-xl m-4 sm:m-0 sm:text-2xl leading-tight tracking-widest text-center sm:text-left sm:my-2">
          Unlock Academic Resources Seamlessly
        </h1>
        <p className="text-sm sm:text-base tracking-wide font-medium text-center sm:text-left max-w-lg mb-6">
          No more hunting for resources. Get curated materials for every
          subject, from beginner to advanced levels. Whether you need detailed
          explanations, practice questions, solved examples, or previous years
          papers, you will find all the essential resources designed to make
          your learning experience smoother and more effective. Stay organized
          and focus on what matters most—your studies.
        </p>
        <div className="flex justify-center sm:justify-start ">
          <Link
            to="/signup"
            className="border bg-yellow-300 dark:bg-gray-600 py-3 px-4 sm:px-10 font-semibold rounded-lg hover:bg-yellow-400 transition-all sm:mb-0 "
          >
            Join Us Now
          </Link>
        </div>
      </div>

      <Stats />

      {/* Developed */}
      <div className="w-full sm:w-64 h-auto flex flex-col gap-6 p-4 sm:p-0 sm:border-l sm:px-2 ">
        <p className="font-bold text-center sm:text-left">Developed by,</p>
        <div className="flex sm:flex-col gap-8 sm:gap-4 justify-center sm:justify-start items-center">
          <div className="w-64 sm:mt-5 sm:ml-20 flex flex-col items-center sm:items-start">
            <img
              src="https://avatars.githubusercontent.com/u/128402167?v=4"
              alt="Thejas"
              className="rounded-full h-24 w-24"
            />
            <h4 className="text-center sm:text-left">Thejas</h4>
            <p className=" flex flex-col gap-2 font-semibold tracking-wider text-xs sm:text-base ">
              <span className="flex gap-2 items-center">
                <FaGraduationCap size={24} /> Sjce, Mysore
              </span>
              <span className="flex gap-2 items-center">
                <FaLinkedin size={24} /> <a href="#">Linkedin</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaGithub size={24} /> <a href="#">Github</a>
              </span>
            </p>
          </div>

          <div className="w-64 sm:my-10 sm:ml-20 flex flex-col items-center sm:items-start">
            <img
              src="https://avatars.githubusercontent.com/u/121664018?v=4"
              alt="Vasudev"
              className="rounded-full h-24 w-24"
            />
            <h4 className="text-center sm:text-left">Vasudev</h4>
            <p className="text-xs sm:text-base flex flex-col gap-2 font-semibold tracking-wider">
              <span className="flex gap-2 items-center">
                <FaGraduationCap size={24} /> Sjce, Mysore
              </span>
              <span className="flex gap-2 items-center">
                <FaLinkedin size={24} /> <a href="#">Linkedin</a>
              </span>
              <span className="flex gap-2 items-center">
                <FaGithub size={24} /> <a href="#">Github</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
