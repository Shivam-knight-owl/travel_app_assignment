import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainDashboard } from "./screens/MainDashboard/MainDashboard";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainDashboard />
  </StrictMode>,
);
