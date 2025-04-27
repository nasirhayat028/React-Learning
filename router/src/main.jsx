import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutMe /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <a className="btn btn-primary" href="http://localhost:5175/">
      Home
    </a>{" "}
    <t />
    <a className="btn btn-primary" href="http://localhost:5175/contact">
      Contact
    </a>{" "}
    <t />
    <a className="btn btn-primary" href="http://localhost:5175/about">
      About
    </a>
    <RouterProvider router={router} />
  </StrictMode>
);
