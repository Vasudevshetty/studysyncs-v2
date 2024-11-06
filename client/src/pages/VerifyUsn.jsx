import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import TypingAnimation from "@/components/ui/typing-animation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { verifyUsn } from "@/api/auth"; // Adjust the import as necessary
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import toast from "react-hot-toast";

function VerifyUsn() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [resendEnabled, setResendEnabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { email, usn } = location.state || {};
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // Check if email and usn are defined; if not, navigate back
  useEffect(() => {
    if (!email || !usn) {
      navigate("/check-usn");
    }
  }, [email, usn, navigate]);

  // Mask the email
  const maskEmail = (email) => {
    const [username, domain] = email.split("@");
    const maskedUsername = `${username.slice(0, 2)}${"*".repeat(
      username.length - 4
    )}${username.slice(-2)}`;
    return `${maskedUsername}@${domain}`;
  };

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Enable resend button after 30 seconds
    const enableResend = setTimeout(() => setResendEnabled(true), 30000);

    return () => {
      clearInterval(timer);
      clearTimeout(enableResend);
    };
  }, []);

  // Resend OTP function
  const handleResendOTP = () => {
    setTimeLeft(300);
    setResendEnabled(false);
    console.log("Resending OTP...");
    // TODO: Implement resend OTP logic here
  };

  // Format timer display in mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Verify OTP function
  const mutation = useMutation({
    mutationFn: (data) => verifyUsn(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/signup", { state: { email: data.email, usn: data.usn } });
    },
    onError: (error) => {
      // Set error using React Hook Form
      setError("otp", {
        type: "manual",
        message: error.response?.data?.message || "Verification failed",
      });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ usn, otp: data.otp, email }); // Send the OTP value
  };

  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
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
          </div>
          <HoverCard>
            <img
              src="/Home/otp.png"
              className="h-52 w-52 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
              alt="Login illustration"
            />
          </HoverCard>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-gray-100 font-semibold tracking-wide text-lg">
              OTP has been sent to your email
            </h1>
            <p className="text-gray-100/70 text-md lg:text-lg">
              {email && maskEmail(email)}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from useForm
            className="flex flex-col gap-2 w-full sm:w-4/5 md:w-3/5 items-center"
          >
            <InputOTP {...register("otp")} maxLength={6}>
              {" "}
              {/* Register OTP input */}
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
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
            )}
            <div className="flex flex-col items-center justify-center w-full sm:w-4/5 md:w-3/5 gap-2">
              <p className="text-gray-100 font-semibold tracking-wide">
                Time left: {formatTime(timeLeft)}
              </p>
              <button
                type="button" // Changed to type "button"
                onClick={handleResendOTP}
                disabled={!resendEnabled}
                className={`${
                  resendEnabled
                    ? "bg-primary-blue text-white"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                } h-10 w-40 rounded-2xl font-semibold`}
              >
                Resend OTP
              </button>
            </div>
            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`bg-primary-blue h-12 w-44 text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center mt-2 ${
                mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="spinner border-white border-t-transparent border-2 w-4 h-4 rounded-full animate-spin"></span>
                </span>
              ) : (
                "Verify"
              )}
            </button>
          </form>
        </div>
      </div>
    </UtilLayout>
  );
}

export default VerifyUsn;
