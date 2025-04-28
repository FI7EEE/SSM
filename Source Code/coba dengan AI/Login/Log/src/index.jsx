import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./screens/Login/Login";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
