import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../Auth/context/AuthContext";


const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <ScrollToTop />
      {user ? (
        <>
          <span className="text-gray-700">Hi, {user.name}</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <a href="/login" className="text-blue-600">Login</a>
      )}
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
