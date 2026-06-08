import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { pageRouter } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={pageRouter}>
    <App />
  </RouterProvider>,
);
