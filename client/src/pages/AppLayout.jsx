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
    <div className="relative">
      <Navbar toggleSidebar={() => setIsSidebarOpen((open) => !open)} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="absolute top-16 sm:left-[17rem] left-2 right-2 translate-all duration-300 dark:bg-custom-black bg-custom-light">
        <Outlet />
      </main>
      <SpringModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        variant={variant}
      >
        {content}
      </SpringModal>
    </div>
  );
}

export default AppLayout;
