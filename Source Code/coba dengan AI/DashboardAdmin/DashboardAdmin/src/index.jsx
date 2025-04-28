import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardAdmin } from "./screens/DashboardAdmin/DashboardAdmin";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DashboardAdmin />
  </StrictMode>,
);
