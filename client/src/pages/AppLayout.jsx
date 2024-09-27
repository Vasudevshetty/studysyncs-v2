import Navbar from "@/components/App/Navbar";
import Sidebar from "@/components/App/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default AppLayout;
