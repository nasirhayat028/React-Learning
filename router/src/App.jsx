import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Home />
      <Contact />
      <AboutMe />
    </>
  );
}

export default App;
