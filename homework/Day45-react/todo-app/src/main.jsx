import React from "react";
import ReactDOM from "react-dom/client";
import { CharkraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App.jsx";
import "./index.css";

export const theme = extendTheme({
  fonts: {
    body: "'Josefin Sans', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <CharkraProvider theme={theme}>
    <App />
  </CharkraProvider>
);
