import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";


const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1 lg:ml-0">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
