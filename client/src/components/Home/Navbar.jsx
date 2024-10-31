import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="text-white px-14 flex gap-3 items-center py-1">
      <img src="/syncs.png" className="w-12 h-12"/>
        <h1 className="text-2xl font-bold">StudySyncs</h1>
      </div>

      <div className="text-white bg-secondary-blue px-12 pt-3 w-1/2 rounded-tr-3xl rounded-tl-2xl rounded-bl-[-20px] flex justify-around items-center opacity-80">
        <a href="#" className="hover:text-gray-400 ">
          Home
        </a>
        <a href="#" className="hover:text-gray-400">
          Features
        </a>
        <a href="#" className="hover:text-gray-400">
          About Us
        </a>
        <a href="#" className="hover:text-gray-400">
          Testimony
        </a>
        <button className="flex items-center gap-2 rounded-3xl px-4 py-2 hover:bg-login-bg-hover bg-login-bg border border-opacity-10">
          <FiUser size={24} />
          <span className="font-medium items-center">Login</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
