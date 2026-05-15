import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/layout.css";

function DashboardLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem("darkMode");

      return savedTheme === "true";

    });

  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="layout">

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="main-content">

          <Navbar
            setIsSidebarOpen={setIsSidebarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div className="page-content">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;