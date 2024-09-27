import Breadcrumb from "@/components/App/Breadcrumb";
import Navbar from "@/components/App/Navbar";
import Sidebar from "@/components/App/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="h-screen">
      <Navbar toggleSidebar={() => setIsSidebarOpen((open) => !open)} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="mt-[4.5rem] h-full sm:ml-64 text-gray-500 translate-all duration-300 dark:bg-gray-800 bg-gray-200">
        <Breadcrumb />
        <Outlet />
      </main>
    </main>
  );
}

export default AppLayout;
