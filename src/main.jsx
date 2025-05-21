import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer style={{top: "80px"}} />
      </AuthProvider>
  </StrictMode>
);
