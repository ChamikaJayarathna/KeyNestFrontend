import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PropertyPage from "./pages/PropertyPage";
import { AuthContextProvider } from "./context/AuthContext";
import PredictPropertyPage from "./pages/PredictPropertyPage";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/admin-pages/Dashboard";
import ViewProperty from "./admin/admin-pages/ViewProperty";
import SingleProperty from "./admin/admin-pages/SingleProperty";

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
      path: "/predict-property",
      element: <PredictPropertyPage />,
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
      ]
    },
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
