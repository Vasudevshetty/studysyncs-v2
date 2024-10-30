import { FiUser } from "react-icons/fi";

function Hero() {
  return (
    <div className="p-12 h-screen">
      <div className="flex justify-between">
        <div className="text-white px-14">
          <h1 className="text-3xl font-bold">StudySyncs</h1>
        </div>

        <div className="text-white bg-secondary-blue px-12 py-3 w-1/2 rounded-tr-3xl rounded-tl-2xl rounded-bl-[-20px] flex justify-around items-center">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Testimony
          </a>
          <button className="flex items-center gap-2 rounded px-2 py-1">
            <FiUser size={24} />
            <span className="font-medium items-center">Login</span>
          </button>
        </div>
      </div>
      {/* Background section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-blue to-custom-black h-[84vh] rounded-tl-3xl"></div>
        <div className="h-[84vh] bg-image rounded-tl-3xl text-white "></div>
      </div>
    </div>
  );
}

export default Hero;
