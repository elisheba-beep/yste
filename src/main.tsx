import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ViewportProvider } from "./context/viewportContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>
);
