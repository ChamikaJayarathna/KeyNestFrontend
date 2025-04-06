import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PropertyPage from "./pages/PropertyPage";
import { AuthProvider } from "./context/AuthContext";
import PredictPropertyPage from "./pages/PredictPropertyPage";
import AdminLayout from "./admin/AdminLayout";
import SearchPage from "./pages/SearchPage";
import PropertyDetailsCard from "./components/property-details/PropertyDetailsCard";
import Dashboard from "./admin/dashboard/Dashboard";
import AddProperty from "./admin/add-property/AddProperty";
import ViewProperty from "./admin/view-property/ViewProperty";
import Profile from "./pages/Profile";

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
      path: "/profile/:id",
      element: <Profile />,
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
          path: "add-property",
          element: <AddProperty />,
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
