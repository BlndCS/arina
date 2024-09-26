import ReactDOM from "react-dom/client";

import React from "react";

import { Toaster } from "./components/ui/toaster";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
