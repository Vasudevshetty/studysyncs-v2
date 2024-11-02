/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import TypingAnimation from "../components/Home/TypingAnimation"; // Import the TypingAnimation component

function Login() {
  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Welcome back to{" "}
              <span className="text-primary-yellow font-segoe-script font-bold ">
                <TypingAnimation
                  text="StudySyncs..."
                  typingSpeed={200}
                  pauseTime={1000}
                />
              </span>
            </h1>
            <h2 className="text-gray-100/60 text-sm sm:text-md md:text-lg lg:text-lg tracking-wide font-semibold mt-2 lg:mt-2">
              Let's get logged in!
            </h2>
          </div>
          <img
            src="/Home/Login.png"
            className="h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
            alt="Login illustration"
          />
        </div>

        {/* Right side with form */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5">
            <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
              Enter email
            </label>
            <input className="p-2 rounded-2xl bg-[#E3E3E350]" type="email" />
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-4/5 md:w-3/5">
            <div className="flex justify-between items-center w-full">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter password
              </label>
              <a
                className="text-primary-blue text-xs sm:text-xs md:text-sm cursor-pointer hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <input className="p-2 rounded-2xl bg-[#E3E3E350]" type="password" />
          </div>

          {/* Remember me section aligned to the start */}
          <div className="flex items-center gap-2 w-full sm:w-4/5 md:w-3/5 justify-start">
            <input
              type="radio"
              id="remember"
              name="remember"
              className="accent-primary-blue"
            />
            <label
              htmlFor="remember"
              className="text-gray-100/60 text-xs sm:text-sm"
            >
              Remember me
            </label>
          </div>

          {/* Login button and sign up link */}
          <div className="flex items-center justify-center w-full sm:w-4/5 md:w-3/5 flex-col gap-2">
            <button className="bg-primary-blue h-10 md:h-12 w-24 md:w-32 text-sm sm:text-base md:text-[1.2rem] rounded-2xl text-white font-semibold">
              Login
            </button>
            <p className="text-gray-100/50 text-xs sm:text-xs md:text-sm mt-2">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="text-primary-blue font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </UtilLayout>
  );
}

export default Login;
