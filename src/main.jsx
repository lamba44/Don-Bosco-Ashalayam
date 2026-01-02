import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRoutes />
        <Analytics />
        <SpeedInsights />
    </StrictMode>
);
