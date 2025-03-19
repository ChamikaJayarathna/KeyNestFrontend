import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const togglePropertyMenu = () => {
    setIsPropertyOpen(!isPropertyOpen);
  };

  return (
    <aside
      className="app-sidebar bg-body-secondary shadow"
      data-bs-theme="dark"
    >
      <div className="sidebar-brand">
        <Link to="/dashboard" className="brand-link text-center">
          <span className="brand-text font-weight-light">KeyNest Admin</span>
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className={`nav-item ${isDashboardOpen ? "menu-open" : ""}`}>
              <a
                href="#"
                className={`nav-link ${isDashboardOpen ? "active" : ""}`}
                onClick={toggleDashboardMenu}
              >
                <i className="nav-icon bi bi-speedometer" />
                <p>
                  Dashboard
                  <i
                    className={`nav-arrow bi ${
                      isDashboardOpen ? "bi-chevron-down" : "bi-chevron-right"
                    }`}
                  />
                </p>
              </a>
              <ul
                className={`nav nav-treeview ${
                  isDashboardOpen ? "d-block" : "d-none"
                }`}
              >
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon bi bi-circle" />
                    <p>Dashboard</p>
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className={`nav-item ${isPropertyOpen ? "menu-open" : ""}`}>
              <a
                href="#"
                className={`nav-link ${isPropertyOpen ? "active" : ""}`}
                onClick={togglePropertyMenu}
              >
                <i className="bi bi-house-add-fill"></i>
                <p>
                  Property
                  <i
                    className={`nav-arrow bi ${
                      isPropertyOpen ? "bi-chevron-down" : "bi-chevron-right"
                    }`}
                  />
                </p>
              </a>
              <ul
                className={`nav nav-treeview ${
                  isPropertyOpen ? "d-block" : "d-none"
                }`}
              >
                <li className="nav-item">
                  <NavLink to="/view-property" className="nav-link">
                    <i className="nav-icon bi bi-circle" />
                    <p>View Property</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/add-property" className="nav-link">
                    <i className="nav-icon bi bi-circle" />
                    <p>Add Property</p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
