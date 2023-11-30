import { useState } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { ContactForm } from "./components/Contact/ContactForm";
import { Experience } from "./components/Experience/Experience";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import star from "./assets/LightDark/star.png";
import moon from "./assets/LightDark/moon.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span>
          <img className="toggle-img" src={star}></img>
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setDarkMode(!darkMode)}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
        <span>
          <img className="toggle-img" src={moon}></img>
        </span>
      </div>
      <Navbar />
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <ContactForm></ContactForm>
      <Contact />
    </div>
  );
}

export default App;
