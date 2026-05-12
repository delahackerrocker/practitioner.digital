import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EditorApp from "./editor/EditorApp";
import { TuningProvider } from "./tuning/useTuning.jsx";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/components.css";

// The tuning provider powers both the live site and the dev-only visual editor.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TuningProvider>
      <App />
      <EditorApp />
    </TuningProvider>
  </React.StrictMode>
);
