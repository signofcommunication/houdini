import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("/src/worklets/checkerboard.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
