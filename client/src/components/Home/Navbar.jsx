import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className="text-white flex flex-wrap justify-between items-center px-4 bg-blue-500">
      <div>
        <h1>StudySyncs</h1>
      </div>

      <div className="flex gap-5 items-center">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Testimony</li>
        </ul>

        <button className="flex items-center gap-2">
          <FiUser />
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
