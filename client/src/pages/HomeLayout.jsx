import { FiUser } from "react-icons/fi";

function HomeLayout() {
  return (
    <div className="bg-black">
      <div className="h-screen p-12 w-screen">
        <div className="w-full flex">
          <h1 className="text-white w-2/4 p-2 px-4">studysyncs</h1>
          <nav className="bg-[#22baf659] h-12 items-center flex text-white w-2/3 px-5 rounded-t-3xl">
            <ul className="flex justify-evenly w-full">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Testimony</a>
              </li>
              <li>
                <button className="flex items-center gap-2">
                  <FiUser />
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-gradient-to-b from-[#22baf659] to-[#090909] h-full rounded-tl-3xl relative">
          <img
            src="/grid.png"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-5 pt-8"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
