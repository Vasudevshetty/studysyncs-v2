import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default AppLayout;
