import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PropertyPage from "./pages/PropertyPage";
import { AuthProvider } from "./context/AuthContext";
import PredictPropertyPage from "./pages/PredictPropertyPage";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/admin-pages/Dashboard";
import ViewProperty from "./admin/admin-pages/ViewProperty";
import SingleProperty from "./admin/admin-pages/SingleProperty";
import AddProperty from "./admin/admin-pages/AddProperty";
import UpdateProperty from "./admin/admin-pages/UpdateProperty";
import SearchPage from "./pages/SearchPage";
import PropertyDetailsCard from "./components/property-details/PropertyDetailsCard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/property",
      element: <PropertyPage />,
    },
    {
      path: "/property-details/:id",
      element: <PropertyDetailsCard />,
    },
    {
      path: "/predict-property",
      element: <PredictPropertyPage />,
    },
    {
      path: "/search/:query",
      element: <SearchPage />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "view-property",
          element: <ViewProperty />,
        },
        {
          path: "view-single-property/:id",
          element: <SingleProperty />,
        },
        {
          path: "add-property",
          element: <AddProperty />,
        },
        {
          path: "update-property/:id",
          element: <UpdateProperty />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
