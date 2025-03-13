import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-5 lg:max-w-[1140px] lg:mx-auto">
        <About />
        <Skills />
        <MyProjects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
