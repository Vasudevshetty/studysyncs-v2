/* eslint-disable no-unused-vars */
import { useTheme } from "../context/ThemeContext";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the context

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      } flex flex-col items-center md:flex-row md:items-center md:justify-evenly gap-10 p-10 h-80`}
    >
      <img src="/logo.png" className="h-20 order-1" alt="footer logo" />
      <div className="flex flex-col md:flex-row gap-14 order-2">
        <div className="flex flex-col gap-3 tracking-wide font-medium text-center md:text-left">
          <Link className="hover:underline">About</Link>
          <Link className="hover:underline">Contact us</Link>
          <Link className="hover:underline">Pricing</Link>
          <Link className="hover:underline">Careers</Link>
        </div>
        <div className="flex flex-col gap-2 tracking-wide font-medium text-center md:text-left">
          <Link className="hover:underline">Terms of use</Link>
          <Link className="hover:underline">Privacy Policy</Link>
          <Link className="hover:underline">Blog</Link>
        </div>
      </div>
      <div className="order-3">
        <p className="tracking-wider font-semibold text-lg text-center md:text-left">
          Social Media
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-3 cursor-pointer">
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={32} />
          </a>
          <a
            href="https://github.com/thejas027"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
