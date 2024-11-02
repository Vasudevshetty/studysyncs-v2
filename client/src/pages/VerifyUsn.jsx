/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import TypingAnimation from "@/components/ui/typing-animation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function CheckUsn() {
  const email = "teju270934@gmail.com";

  // Function to mask the email
  const maskEmail = (email) => {
    const [username, domain] = email.split("@");
    const maskedUsername = `${username.slice(0, 2)}${"*".repeat(
      username.length - 4
    )}${username.slice(-2)}`;
    return `${maskedUsername}@${domain}`;
  };

  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col items-start lg:items-center">
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
            {/* Display masked email */}
          </div>
          <HoverCard>
            <img
              src="/Home/otp.png"
              className="h-52 w-52 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
              alt="Login illustration"
            />
          </HoverCard>
        </div>

        {/* Right side with form */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-gray-100 font-semibold tracking-wide text-lg">
              OTP has been sent to your email
            </h1>
            <p className="text-gray-100/70 text-md lg:text-lg ">
              {maskEmail(email)}
            </p>
          </div>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <div className="flex items-center justify-center w-full sm:w-4/5 md:w-3/5 flex-col gap-2">
            <Link
              to="/signup"
              className="bg-primary-blue h-12 w-44 text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center"
            >
              Verify
            </Link>
          </div>
        </div>
      </div>
    </UtilLayout>
  );
}

export default CheckUsn;
