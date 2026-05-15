import {
  LayoutDashboard,
  Briefcase,
  Users,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "show-sidebar" : ""
      }`}
    >
      <div className="sidebar-header">
        <h2 className="logo">ATS</h2>

        <X
          className="close-icon"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      <nav>
        <NavLink
          to="/dashboard"
          className="nav-item"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className="nav-item"
        >
          <Briefcase size={20} />
          Jobs
        </NavLink>

        <NavLink
          to="/candidates"
          className="nav-item"
        >
          <Users size={20} />
          Candidates
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;