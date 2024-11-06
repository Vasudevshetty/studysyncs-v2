import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-[#001E2A] px-6 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row justify-around items-center text-center md:text-left h-auto md:h-[60vh]">
      {/* Logo */}
      <div className="text-3xl md:text-4xl font-bold tracking-wider text-gray-100 mb-6 md:mb-0">
        StudySyncs
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-6 md:mb-0">
        <div>
          <ul className="flex flex-col gap-4 md:gap-8 text-gray-100/80 cursor-pointer">
            <li className="hover:text-gray-500">Home</li>
            <li className="hover:text-gray-500">Features</li>
            <li className="hover:text-gray-500">Testimonials</li>
            <li className="hover:text-gray-500">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4 md:gap-8 text-gray-100/80 cursor-pointer ">
            <li className="hover:text-gray-500">Terms of Use</li>
            <li className="hover:text-gray-500">Privacy Policy</li>
            <li className="hover:text-gray-500">Blog</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="text-center">
        <h1 className="text-primary-yellow text-2xl md:text-3xl font-semibold tracking-wide mb-4">
          Social Media
        </h1>
        <div className="flex items-center justify-center gap-6">
          <FiLinkedin size={30} color="#0077B5" /> {/* LinkedIn Blue */}
          <FiInstagram size={30} color="#E4405F" /> {/* Instagram Pink */}
          <FiGithub size={30} color="#F3F3F3" /> {/* GitHub Black */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
