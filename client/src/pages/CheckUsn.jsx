import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import TypingAnimation from "@/components/ui/typing-animation";
import { FcCheckmark } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { checkUsn } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";

function CheckUsn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [usnStatus, setUsnStatus] = useState("valid");

  const mutation = useMutation({
    mutationFn: (usn) => checkUsn(usn),
    onSuccess: (data) => {
      navigate("/verify-usn", { state: { email: data.email, usn: data.usn } });
      setUsnStatus("valid");
    },
    onError: (error) => {
      setError("usn", {
        type: "manual",
        message: error.response?.data?.message || "An error from api",
      });
      setUsnStatus("invalid");
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData.usn);
  };

  const handleInputChange = () => {
    // const { value } = event.target;
    setUsnStatus("valid"); // Reset to valid on input change
    // You might want to validate the input here if necessary
  };

  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col  items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Welcome to
              <span className="text-primary-yellow font-segoe-script font-bold mt-2 text-xl sm:text-3xl">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 items-center"
          >
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter your USN
              </label>
              <div className="flex items-center justify-between">
                <input
                  className="pl-2 sm:p-2 rounded-2xl bg-[#E3E3E350] flex-1 h-10 sm:h-12 text-white  focus:outline-none"
                  type="text"
                  {...register("usn", { required: "USN is required" })}
                  onChange={handleInputChange}
                />
                <div
                  className={`h-10 w-10 sm:h-16 sm:w-16 flex justify-center items-center rounded-full -ml-10 sm:-ml-14 ${
                    usnStatus === "valid" ? "bg-white" : "bg-red-600"
                  }`}
                >
                  {usnStatus === "valid" ? (
                    <FcCheckmark size={26} fontWeight={"bold"} />
                  ) : (
                    <FiX size={32} className="text-white" />
                  )}
                </div>
              </div>
              {errors.usn && (
                <p className="text-red-500 text-sm">{errors.usn.message}</p>
              )}
            </div>

            {/* Login button and sign up link */}
            <button
              type="submit"
              className={`bg-primary-blue h-12 w-44    text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center ${
                mutation.isPending && "bg-opacity-50"
              }`}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <span className="flex items-center gap-2">
                  <span className="spinner border-white border-t-transparent border-2 w-4 h-4 rounded-full animate-spin"></span>
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </UtilLayout>
  );
}

export default CheckUsn;
