import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default AppLayout;
