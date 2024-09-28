/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import InputField from "@/components/Home/InputField";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup Successful");
  };

  const password = watch("password");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 ">
      <img src="/logo.png" className="h-10 sm:h-24" />

      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        {/* User ID */}
        <InputField
          id="userId"
          label="User ID"
          type="text"
          register={register}
          validation={{ required: "User ID is required" }}
          error={errors.userId}
        />

        {/* Email */}
        <InputField
          id="email"
          label="Email"
          type="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Enter a valid email address",
            },
          }}
          error={errors.email}
        />

        {/* Password */}
        <InputField
          id="password"
          label="Password"
          type="password"
          register={register}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          error={errors.password}
        />

        {/* Confirm Password */}
        <InputField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          register={register}
          validation={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          error={errors.confirmPassword}
        />

        {/* Signup Button */}
        <Link to="/app/dashboard">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
          >
            Signup
          </button>
        </Link>
        <p className="mt-4 text-sm font-medium">
          Have an account?
          <Link
            to="/Login"
            className="text-blue-800 font-semibold hover:underline px-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
