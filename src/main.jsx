import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { enableScrollHighlight } from "./scrollHighlight";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Make sure the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  enableScrollHighlight();
});