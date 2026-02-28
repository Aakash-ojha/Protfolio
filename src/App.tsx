import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#000319" }} className=" text-white ">
      <NavBar isOpen={isOpen} toggle={toggle} />
      <div
        className={`transition-all duration-300 ${isOpen ? "blur-sm pointer-events-none" : ""}`}
      >
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default App;
