import { Link } from "react-router-dom";

function UtilLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-white flex justify-around w-[85vw]">
        <div className="w-1/2 h-fit p-1">
          <Link
            to="/"
            className=" text-lg sm:text-3xl px-8 font-bold cursor-pointer tracking-wide"
          >
            StudySyncs
          </Link>
        </div>
        <div className="text-white bg-secondary-blue w-full rounded-tr-3xl box" />
      </div>

      <div className="w-[85vw] flex items-center justify-center h-fit min-h-[85vh] bg-gradient-to-b from-secondary-blue to-custom-black rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}

export default UtilLayout;
