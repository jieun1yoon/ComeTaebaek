import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/bootstrap.css";
import App from "./App.jsx";

import { inject } from "@vercel/analytics";

inject();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
