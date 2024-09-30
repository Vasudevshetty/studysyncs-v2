import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="pl-8 py-3">
      <ol className="flex items-center max-sm:text-sm">
        <li>
          <Link
            to="/app/dashboard"
            className="text-blue-500 focus:outline-none"
          >
            <FaHome />
          </Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <span className="mx-2">/</span>
              {index == paths.length - 1 ? (
                <span className="capitalize">{path}</span>
              ) : (
                <Link
                  to={to}
                  className="text-blue-500 capitalize focus:outline-none"
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
