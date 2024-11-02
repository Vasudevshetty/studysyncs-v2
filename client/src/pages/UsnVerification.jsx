/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import TypingAnimation from "@/components/ui/typing-animation";
import { FcCheckmark } from "react-icons/fc";

function UsnVerification() {
  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col  items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Welcome to
              <span className="text-primary-yellow font-segoe-script font-bold mt-2">
                <TypingAnimation
                  text="StudySyncs..."
                  typingSpeed={200}
                  pauseTime={1000}
                />
              </span>
            </h1>
            <h2 className="text-gray-100/60 text-sm sm:text-md md:text-lg lg:text-xl tracking-wide font-semibold mt-2 lg:mt-2">
              Verify my USN!
            </h2>
          </div>
          <HoverCard>
            <img
              src="/Home/usn.png"
              className="h-52 w-52 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
              alt="Login illustration"
            />
          </HoverCard>
        </div>

        {/* Right side with form */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5 ">
            <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
              Enter your USN
            </label>
            <div className="flex items-center ">
              <input className="p-2 rounded-2xl bg-[#E3E3E350] flex-1 h-12 text-white  focus:outline-none" type="email" />
              <span className="p-2 bg-white h-16 w-16 flex justify-center items-center rounded-full -ml-12">
                <FcCheckmark size={26} fontWeight={"bold"} />
              </span>
            </div>
          </div>

          {/* Login button and sign up link */}
          <div className="flex items-center justify-center w-full sm:w-4/5 md:w-3/5 flex-col gap-2">
            <Link
              to="/verify-usn"
              className="bg-primary-blue h-12 w-44    text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </UtilLayout>
  );
}

export default UsnVerification;
