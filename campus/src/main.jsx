import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'typeface-montserrat';
import "@fontsource/quicksand";
import { ContextProvider } from "./components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);