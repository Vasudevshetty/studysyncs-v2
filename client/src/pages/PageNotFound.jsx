import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex items-center text-5xl flex-col justify-center gap-5">
      <img src="/logo.png" alt="logo" className="h-15 w-15" />
      <div className="flex items-center justify-center flex-col gap-3">
        <p className="text-red-500 font-semibold text-2xl sm:text-5xl">
          Page Not Found 404 🕸️.
        </p>
        <p className="text-xl sm:text-2xl">
          Redirect to{" "}
          <Link to="/" className="underline text-blue-500">
            Home
          </Link>
        </p>
        <p className="text-xl sm:text-2xl">
          Already a user!{" "}
          <Link to="/login" className="underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
