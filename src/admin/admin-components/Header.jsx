import React from "react";

const Header = () => {
  const toggleSidebar = () => {
    document.body.classList.toggle("sidebar-collapse");
  };

  return (
    <div>
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link bg-transparent border-0"
                onClick={toggleSidebar}
                style={{ cursor: "pointer" }}
                role="button"
              >
                <i className="bi bi-list" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
