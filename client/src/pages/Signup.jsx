/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";

function Signup({ unmaskedEmail = "teju270934@gmail.com" }) {
  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Hey,
              <span className="text-primary-yellow font-segoe-script font-bold ">
                {unmaskedEmail}
              </span>
            </h1>
            <h2 className="text-gray-100/60 text-sm sm:text-md md:text-lg lg:text-lg tracking-wide font-semibold mt-2 lg:mt-2">
              Let's get you signed in!
            </h2>
          </div>
          <HoverCard>
            <img
              src="/Home/Login.png"
              className="h-52 w-52 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
              alt="Login illustration"
            />
          </HoverCard>
        </div>

        {/* Right side with form */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5 ">
            <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
              Enter your Username
            </label>
            <input
              className="p-2 rounded-2xl bg-[#E3E3E350] text-white  focus:outline-none"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5 ">
            <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
              Enter password
            </label>
            <input
              className="p-2 rounded-2xl bg-[#E3E3E350] text-white  focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5 ">
            <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
              Confirm password
            </label>
            <input
              className="p-2 rounded-2xl bg-[#E3E3E350] text-white  focus:outline-none"
              type="password"
            />
          </div>

          {/* Login button and sign up link */}
          <div className="flex items-center justify-center w-full sm:w-4/5 md:w-3/5 flex-col gap-2">
            <Link
              to="/app"
              className="bg-primary-blue h-12 w-36   text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center"
            >
              Sign up
            </Link>
            <p className="text-gray-100/50 text-xs sm:text-xs md:text-sm mt-2 tracking-wider font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary-blue font-semibold hover:underline tracking-wide"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </UtilLayout>
  );
}

export default Signup;
