import React from "react";
import { NavLink } from "react-router";

function Hero() {
  return (
    <div className=" max-w-[1140px] mx-auto">
      <h2 className="font-heading font-semibold text-[100px] leading-24 pt-10 text-center uppercase">
        Hi, I am Shohidul Islam <span className="text-neongreen ">Razu</span>
      </h2>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 flex justify-center items-center">
          <div className="-rotate-90 ">
            <h2 className=" font-sub-heading font-extrabold text-[70px] uppercase opacity-60 mx-20">
              <span className="text-neongreen ">FrontEnd </span>
              Developer
            </h2>
          </div>
        </div>
        <div className="col-span-6 -mt-24">
          <img
            src="https://i.ibb.co.com/jjjPWVh/Untitled-design.png"
            alt="Image"
            className="max-h-[800px] mx-auto"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center">
          <ul className=" flex gap-5 justify-around uppercase font-bold text-6xl flex-wrap opacity-50 font-sub-heading">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Skills</NavLink>
            </li>
            <li>
              <NavLink>Experience</NavLink>
            </li>
            <li>
              <NavLink>Projects</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
          <button className="bg-transparent border-neongreen  border-2 py-3 px-10 w-full mt-5">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
