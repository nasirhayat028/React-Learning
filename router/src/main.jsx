import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";

const Root = () => {
  return (
    <BrowserRouter>
      <div className="nav-buttons">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-primary" to="/contact">
          Contact
        </Link>
        <Link className="btn btn-primary" to="/about">
          About
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
