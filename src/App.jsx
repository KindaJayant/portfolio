import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <div id="home">
      <Hero />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="work">
      <Projects />
      </div>
      <div id="experiences">
      <Experiences />
      </div>
      <div id="contact">
      <Contact />
      </div>
        <Footer/>
    </div>
  );
};

export default App;