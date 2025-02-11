import "./index.scss";

import { createRoot } from "react-dom/client";

import App from "./App";

import makeServer from "./mocks/server";

// Make MirageJS Server
if (process.env.NODE_ENV === "development") {
  makeServer();
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
