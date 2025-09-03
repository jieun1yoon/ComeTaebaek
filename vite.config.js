import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        historyApiFallback: true,
    },
    base: "/ComeTaebaek/",
    plugins: [react()],
});
