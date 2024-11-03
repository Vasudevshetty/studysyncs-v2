/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth"; // Adjust the import as necessary
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the password visibility
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // Login mutation
  const mutation = useMutation({
    mutationFn: (data) => login(data), // Replace with your actual login API service
    onSuccess: (data) => {
      setUser(data.user);
      toast.success(data.message);
      navigate("/app");
    },
    onError: (error) => {
      // Set error using React Hook Form
      setError("apiError", {
        type: "manual",
        message: error.response?.data?.message || "Login failed",
      });
    },
  });

  const onSubmit = (data) => {
    console.log("Submitting Login Data:", data);
    mutation.mutate(data); // Send the login data to the API
  };

  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Welcome back to{" "}
              <span className="text-primary-yellow font-segoe-script font-bold ">
                StudySyncs
              </span>
            </h1>
            <h2 className="text-gray-100/60 text-sm sm:text-md md:text-lg lg:text-lg tracking-wide font-semibold mt-2 lg:mt-2">
              Let's get logged in!
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
          <form
            onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from useForm
            className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 "
          >
            <div className="flex flex-col gap-1">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter email
              </label>
              <input
                className={`p-2 rounded-2xl bg-[#E3E3E350] text-white focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter password
              </label>
              <input
                className={`p-2 rounded-2xl bg-[#E3E3E350] pr-10 text-white focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                type={showPassword ? "text" : "password"} // Toggle between text and password
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10" // Position the icon within the input
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <FiEye size={18} className="text-gray-100  " />
                ) : (
                  <FiEyeOff size={18} className="text-gray-100 " />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* API error message */}
            {errors.apiError && (
              <p className="text-red-500 text-sm">{errors.apiError.message}</p>
            )}

            {/* Login button and sign up link */}
            <div className="flex items-center justify-center w-full flex-col gap-2">
              <button
                type="submit"
                className={`bg-primary-blue h-12 w-36 text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center ${
                  mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="spinner border-white border-t-transparent border-2 w-4 h-4 rounded-full animate-spin"></span>
                  </span>
                ) : (
                  "Login"
                )}
              </button>
              <p className="text-gray-100/50 text-xs sm:text-xs md:text-sm mt-2 tracking-wider font-medium">
                Don't have an account yet?{" "}
                <Link
                  to="/check-usn"
                  className="text-primary-blue font-semibold hover:underline tracking-wide"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </UtilLayout>
  );
}

export default Login;
