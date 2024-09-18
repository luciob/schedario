import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Showcase from "./Showcase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Showcase />
  </React.StrictMode>
);
