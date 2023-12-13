import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarItem from "./components/Navbar/NavbarItem.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarItem />
    <App />
  </React.StrictMode>
);
