import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="h-screen w-screen items-center justify-center flex">
      <div className="flex items-center justify-center flex-col gap-3">
        <p className="text-red-500 font-semibold text-2xl sm:text-5xl">
          Unauthorized 403️.
        </p>
        <p className="text-xl sm:text-2xl text-white">
          Redirect to{" "}
          <Link to="/" className="underline text-blue-500">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
