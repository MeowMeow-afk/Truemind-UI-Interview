import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { StateProvider } from "./Store";
import "./Styles/_Global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
