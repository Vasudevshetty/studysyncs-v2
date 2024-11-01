/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "./Navbar";
import AnimatedImages from "./AnimatedImages";

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const text = "Study Hub!";
  const typingSpeed = 200;
  const pauseTime = 1000;

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index <= text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setDisplayedText("");
          index = -1; // Reset index for loop
          typeText();
        }, pauseTime);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div className="px-4 md:px-12 py-2 sm:py-8 h-screen ">
      <Navbar />

      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-blue to-custom-black h-[84vh] rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-3xl md:rounded-tr-3xl lg:rounded-tr-none z-0 opacity-80" />
        <div className="absolute inset-0 bg-image z-0" />

        {/* Main Hero Content */}
        <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] w-full md:w-[95vw] rounded-tl-3xl text-white flex flex-col justify-center items-center px-4 md:px-14 z-10 text-center">
          <div className="relative flex flex-col h-full justify-center items-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
              All-in-one{" "}
              <span className="text-primary-yellow font-segoe-script text-2xl sm:text-5xl md:text-5xl lg:text-5xl ml-2 md:ml-4 font-bolder ">
                {displayedText} {/* Display the typed text */}
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-5 xl lg:text-5xl mt-3 font-semibold">
              Access Curated Resources, Anytime!
            </h2>

            <p className="text-text-primary w-full md:w-2/3 mt-4 tracking-wider text-[14px] md:text-[14px] lg:text-lg">
              "Your one-stop study hub for every subject, every level. Access
              curated resources and streamline your learning journey today!"
            </p>

            <button className="bg-primary-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-3xl mt-6 md:mt-10 group hover:border hover:bg-secondary-blue hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm sm:text-xl">
              Get Started With Us!{" "}
              <FiArrowUpRight
                size={20}
                className="transition-transform duration-200 group-hover:rotate-45"
              />
            </button>
          </div>
        </div>
        <AnimatedImages
          src="/Home/pencil.png"
          className=" h-16 w-16 sm:h-20 sm:w-20  lg:h-32 lg:w-32 z-10 absolute top-12 left-2 "
        />
        <AnimatedImages
          src="/Home/CALENDER.png"
          className="h-20 w-20 sm:h-24 sm:w-24 lg:h-36 lg:w-36 z-10 absolute bottom-2 md:left-2"
        />
        <AnimatedImages
          src="/Home/BOOK.png"
          className="h-24 w-24 sm:h-36 sm:w-36 lg:h-52 lg:w-52 z-10 absolute top-2  right-4"
        />
        <AnimatedImages
          src="/Home/pencil.png"
          className="h-20 w-20 sm:h-24 sm:w-24 lg:h-36 lg:w-36 z-10 absolute bottom-12 md:right-8 right-4"
        />
      </div>
    </div>
  );
}

export default Hero;
