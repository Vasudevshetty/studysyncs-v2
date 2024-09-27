import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="pl-8 py-3 w-full">
      <ol className="flex items-center">
        <li>
          <Link to="/" className="text-blue-500">
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
                <Link to={to} className="text-blue-500 capitalize">
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
