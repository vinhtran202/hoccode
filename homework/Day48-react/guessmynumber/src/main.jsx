import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./store/Provider";
import "@fortawesome/fontawesome-free/css/all.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider>
    <App />
  </Provider>
);
