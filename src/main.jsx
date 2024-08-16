import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import AuthProvider from "./provider/AuthProvider";
import Login from "./sign/Login";
import Register from "./sign/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Welcome from "./pages/welcome/Welcome";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome></Welcome>,
  },
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
