import { CalendarCheck, File } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-[20vw]">
      <div className="w-full h-[80%] max-sm:h-[90%]">
        <ul className="flex flex-col gap-2">
          {[
            {
              link: "/app/attendance",
              icon: <CalendarCheck />,
              name: "Attendance",
            },
            {
              link: "/app/notes",
              icon: <File />,
              name: "Notes",
            },
          ].map((side, idx) => (
            <li key={idx} className="bg-red-100">
              <Link
                to={side.link}
                className="w-full flex items-center gap-4 px-10 py-5 max-lg:px-2 max-md:justify-center"
              >
                <span>{side.icon}</span>
                <span className="max-md:hidden">{side.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[20%] max-sm:h-[10%] p-4 flex flex-col gap-2 max-md:text-xs">
        <span className="max-sm:hidden">Studysyncs</span>{" "}
        <span>&copy; 2024.</span>{" "}
        <span className="max-sm:hidden">All rights reserved</span>
      </div>
    </aside>
  );
}

export default Sidebar;
