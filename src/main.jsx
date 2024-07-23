import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// TODO: Figure out how to deploy. Maybe use github pages? Or netlify? Or something else? I do have access to cameronadrian.com. Maybe I could use that. or cameronadrian.dev
