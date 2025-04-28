import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardUser } from "./screens/DashboardUser";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DashboardUser />
  </StrictMode>,
);
