import "./index.scss";

import { createRoot } from "react-dom/client";

import App from "./App";

import makeServer from "./server";

// Make MirageJS Server
makeServer();

const root = createRoot(document.getElementById("root"));
root.render(<App />);
