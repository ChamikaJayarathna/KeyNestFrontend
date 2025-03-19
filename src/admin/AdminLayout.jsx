import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./admin-components/Header";
import Sidebar from "./admin-components/Sidebar";
import Footer from "./admin-components/Footer";

const AdminLayout = () => {
  useEffect(() => {
    import("admin-lte/dist/css/adminlte.min.css");
    import("bootstrap/dist/css/bootstrap.min.css");
    import("react-quill-new/dist/quill.snow.css");

    import("admin-lte/dist/js/adminlte.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("@popperjs/core/dist/umd/popper.min.js");
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
