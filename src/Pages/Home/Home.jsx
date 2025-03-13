import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import MyProjects from "./MyProjects";

function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1140px] mx-auto">
        <About />
        <Skills />
        <MyProjects />
      </div>
    </div>
  );
}

export default Home;
