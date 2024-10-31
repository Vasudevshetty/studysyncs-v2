/* eslint-disable react/no-unescaped-entities */

import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="p-12 h-screen">
      <Navbar />

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-blue to-custom-black h-[84vh] rounded-tl-3xl z-0 opacity-80"></div>
        <div className="absolute inset-0 bg-image z-0"></div>

        <div className="relative">
          <img
            src="/Home/pencil.png"
            className="h-32 w-32 z-10 absolute left-[15rem] top-[3rem]"
          />
          <img
            src="/Home/BOOK.png"
            className="h-52 w-52 z-10 absolute right-[8rem] top-[1rem]"
          />
          <img
            src="/Home/CALENDER.png"
            className="h-36 w-36 z-10 absolute top-[26rem] left-8"
          />
          <img
            src="/Home/pencil.png"
            className="h-36 w-36 z-10 absolute top-[24rem] right-[4rem]"
          />
        </div>

        <div className="relative h-[80vh] w-[95vw] rounded-tl-3xl text-white flex flex-col  justify-center items-center px-14 z-10 text-center">
          <div className="relative flex flex-col  h-full justify-center items-center">
            <h1 className="text-5xl font-semibold">
              All-in-one{" "}
              <span className="text-primary-yellow font-segoe-script text-6xl ml-4 font-bolder">
                Study Hub{" "}
              </span>
            </h1>

            <h2 className="text-5xl mt-3 font-semibold">
              Access Curated Resources, Anytime!
            </h2>

            <p className="text-text-primary w-2/3 mt-4 tracking-wider text-md">
              "Your one-stop study hub for every subject, every level. Access
              curated resources and streamline your learning journey today!"
            </p>
            <button className="bg-primary-blue text-white px-6 py-3 rounded-3xl mt-10 hover:border hover:bg-secondary-blue hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              Get Started With Us! <FiArrowUpRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
