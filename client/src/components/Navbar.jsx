import { Bookmark, Download, LogOut, Menu, Search, User2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";

function Navbar() {
  const location = useLocation();
  const isDashBoardPage = location.pathname === "/app/dashboard";

  return (
    <nav className="flex m-3 h-[10%] shadow-2xl rounded-xl items-center justify-between px-[10vw] max-lg:px-[2vw]">
      <Link
        to="/app"
        className="h-[80%] pl-2 focus:outline-none max-md:h-[70%]"
      >
        <img src="/syncs.png" alt="logo" className="w-full h-full" />
      </Link>
      <div
        className={`${
          isDashBoardPage
            ? "w-[40vw] max-md:w-[30vw] max-lg:w-[60vw]"
            : "w-[60vw] max-md:w-[20vw] max-sm:w-[30vw]"
        }  flex items-center justify-evenly h-full`}
      >
        {isDashBoardPage ? (
          <>
            <ul className="flex items-center justify-evenly max-md:hidden w-[80%]">
              {[
                { link: "/app", item: "Home" },
                { link: "attendance", item: "Attendance" },
                { link: "notes", item: "Notes" },
              ].map((nav, idx) => (
                <li
                  key={idx}
                  className="tracking-wider hover:text-gray-400 text-xl focus:outline-none"
                >
                  <Link to={nav.link}>{nav.item}</Link>
                </li>
              ))}
            </ul>

            <Sheet>
              <SheetTrigger>
                <Menu className="hidden max-md:block" />
              </SheetTrigger>
              <SheetContent>
                <h1>Menu</h1>
                <ul className="flex flex-col w-[60%] text-2xl pt-[15%] gap-4">
                  {[
                    { link: "/app", item: "Home" },
                    { link: "attendance", item: "Attendance" },
                    { link: "notes", item: "Notes" },
                  ].map((nav, idx) => (
                    <li
                      key={idx}
                      className="font-bold tracking-wider hover:text-gray-400"
                    >
                      <Link to={nav.link} className="focus:outline-none">
                        {nav.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <>
            <div className="w-[90%] flex max-md:hidden h-[65%] items-center bg-slate-300 rounded-xl">
              <input
                type="text"
                className="w-[85%] h-full focus:outline-none p-2 rounded-xl bg-transparent"
              />
              <button className="w-[15%] h-full flex items-center justify-center focus:outline-none border-l">
                <Search size={24} />
              </button>
            </div>
          </>
        )}
        <div
          className={`flex ${isDashBoardPage ? "" : ""} h-full items-center`}
        >
          <Menubar className="w-full h-[80%] flex items-center justify-evenly border-none bg-transparent">
            {!isDashBoardPage && (
              <>
                <Search className="hidden max-md:block" />
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer max-md:hidden">
                    <Download size={32} className="max-md:hidden" />
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer max-md:hidden">
                    <Bookmark size={32} className="max-md:hidden" />
                  </MenubarTrigger>
                </MenubarMenu>
              </>
            )}
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <Avatar className="h-14 w-14 max-md:h-12 max-md:w-12">
                  <AvatarImage src="https://github.com/Vasudevshetty.png" />
                  <AvatarFallback>
                    {"Vasudev Shetty"
                      .trim()
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word.charAt(0).toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <MenubarContent>
                  <Link to="dashboard" className="focus:outline-none">
                    <MenubarItem>
                      Profile
                      <MenubarShortcut>
                        <User2 />
                      </MenubarShortcut>
                    </MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <MenubarItem>
                    Logout
                    <MenubarShortcut>
                      <LogOut />
                    </MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
