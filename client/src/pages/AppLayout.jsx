import Breadcrumb from "@/components/App/Breadcrumb";
import SpringModal from "@/components/App/SpringModal";
import Navbar from "@/components/App/Navbar";
import Sidebar from "@/components/App/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useModal } from "@/components/context/ModalContext";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isModalOpen, setIsModalOpen, content, variant } = useModal();

  return (
    <>
      <Navbar toggleSidebar={() => setIsSidebarOpen((open) => !open)} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="mt-[4.5rem] sm:ml-64 text-gray-500 translate-all duration-300 dark:bg-gray-800 bg-gray-200">
        <Breadcrumb />
        <Outlet />
      </main>
      <SpringModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        variant={variant}
      >
        {content}
      </SpringModal>
    </>
  );
}

export default AppLayout;
