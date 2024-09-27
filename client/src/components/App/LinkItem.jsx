import { Link } from "react-router-dom";

function LinkItem({ link, icon: Icon, text, badge, onClick }) {
  return (
    <li>
      <Link
        to={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        onClick={onClick}
      >
        <Icon className="mr-3" />
        <span className="flex-1 me-3">{text}</span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </Link>
    </li>
  );
}

export default LinkItem;
