import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router";

function Hero() {
  return (
    <div className=" max-w-[1140px] mx-auto z-10 relative">
      <h2 className="font-heading font-semibold text-[50px] lg:text-[100px] lg:leading-24 pt-10 text-center uppercase z-0">
        Hi, I am Shohidul Islam <span className="text-neongreen ">Razu</span>
      </h2>
      <div className="grid grid-cols-12 gap-2">
        <div className="hidden col-span-3 md:flex justify-center items-center">
          <div className="-rotate-90 ">
            <h2 className=" font-sub-heading font-extrabold text-[70px] uppercase opacity-60 mx-20">
              <span className="text-neongreen ">FrontEnd </span>
              Developer
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 -mt-24">
          <img
            src="https://i.ibb.co.com/jjjPWVh/Untitled-design.png"
            alt="Image"
            className="max-h-[400px] md:max-h-[800px] mx-auto"
          />
        </div>
        <div className="hidden md:col-span-3 md:flex flex-col justify-center items-center px-5 ">
          <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
            <a href="https://github.com/razu381">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/shohidul-razu/">
              <FaLinkedin size={40} />
            </a>
            <a href="https://wa.link/idjlvr">
              <FaWhatsapp size={40} />
            </a>
            <a href="mailto:mdshohidul.razu@gmail.com">
              <FaEnvelope size={40} />
            </a>
          </div>
          <Link
            to="https://drive.google.com/file/d/1J94DJO_XndbGaCmK1dxssCYMh4LbcBIU/view?usp=sharing"
            target="_blank"
            className="bg-transparent border-neongreen  border-2 py-3 px-10 w-full mt-5 text-center"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
