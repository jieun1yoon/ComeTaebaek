import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/ComeTaebaek/", // 이 줄만 추가!
});
