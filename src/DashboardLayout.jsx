import { NavLink } from "react-router-dom";

function DashboardLayout({ role, children }) {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>{role.toUpperCase()} Panel</h3>

        <NavLink
          to={`/${role}`}
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/verify"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Verify
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          History
        </NavLink>
      </div>

      <div className="dashboard-content">{children}</div>
    </div>
  );
}

export default DashboardLayout;