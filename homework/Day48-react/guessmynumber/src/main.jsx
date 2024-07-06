import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./store/Provider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider>
    <App />
  </Provider>
);
