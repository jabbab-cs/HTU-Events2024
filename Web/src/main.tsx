import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const link = document.createElement("link");
link.rel = "icon";
link.href = "/favicon.";
document.head.appendChild(link); // this is to change the vite logo to the HTu logo

document.title = "HTU Events"; //this is tro make the title htu events

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
