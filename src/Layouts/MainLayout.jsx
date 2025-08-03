import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";


const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
     <ScrollToTop/>
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
      <Toaster position='top-center' />
    </>
  );
};

export default MainLayout;
