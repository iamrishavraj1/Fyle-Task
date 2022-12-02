import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/Usercontext";
import { ReposProvider } from "./context/ReposContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <ReposProvider>
        <App />
      </ReposProvider>
    </GithubProvider>
  </React.StrictMode>
);
