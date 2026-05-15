import {
  Menu,
  Moon,
  Sun,
} from "lucide-react";

import "../styles/navbar.css";

function Navbar({
  setIsSidebarOpen,
  darkMode,
  setDarkMode,
}) {

  return (
    <div className="navbar">

      <div className="menu-icon">
        <Menu
          onClick={() =>
            setIsSidebarOpen(true)
          }
        />
      </div>

      <h2>Dashboard</h2>

      <div className="navbar-right">

        <button
          className="theme-toggle"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        <div className="profile">
          A
        </div>

      </div>

    </div>
  );
}

export default Navbar;