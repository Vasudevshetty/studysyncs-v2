import { FaBookOpen, FaSchool } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div className="bg-gray-300 lg:p-5 p-2 rounded-xl w-64 flex flex-col items-center gap-2 dark:bg-app-tertiary">
      <div className="flex items-center lg:p-2 p-1 justify-between w-full">
        <Link to="/app/profile" className="focus:outline-none">
          <img src={user.image} alt={user.name} className="h-14 rounded-full" />
        </Link>
        <ol className="flex items-center justify-center sm:gap-1">
          {user.socials.map((social, index) => (
            <li
              key={index}
              className="text-2xl p-1 sm:p-2 hover:text-white hover:bg-gray-200 rounded-full text-gray-800 dark:text-gray-300 dark:hover:text-gray-800"
            >
              <a
                href={social.link}
                target="_blank"
                className="  focus:outline-none"
              >
                <social.icon />
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col justify-center text-gray-800 gap-2 w-full px-2 dark:text-gray-300">
        {[
          { name: user.college, icon: FaSchool },
          { name: user.course, icon: FaBookOpen },
          { name: user.email.split("@")[0], icon: HiMail },
        ].map((item, index) => (
          <p
            className="flex text-ellipsis line-clamp-1 gap-3 items-center"
            key={index}
          >
            <span className="bg-gray-600 p-2 rounded-full dark:bg-gray-300">
              <item.icon className="text-white dark:text-gray-600" />
            </span>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default User;
