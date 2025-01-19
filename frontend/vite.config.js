import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Don-Bosco-Ashalayam/", //Change to "/" for deployment AND/OR development
});
