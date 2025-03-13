import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-white/5 py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <FaLaptopCode color="white" size={40} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className=" flex gap-5 justify-around uppercase font-bold text-sm flex-wrap  font-sub-heading p-5 z-50">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavHashLink to="#about">About</NavHashLink>
                </li>
                <li>
                  <NavHashLink to="#skills">Skills</NavHashLink>
                </li>

                <li>
                  <NavHashLink to="#projects">Projects</NavHashLink>
                </li>
                <li>
                  <NavHashLink to="#contact">Contact</NavHashLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  target="_blank"
                  className="rounded-lg border border-neongreen px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  to="https://drive.google.com/file/d/1J94DJO_XndbGaCmK1dxssCYMh4LbcBIU/view?usp=sharing"
                >
                  Download CV
                </Link>
              </div>

              <div className="block md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
              {isOpen && (
                <ul className=" flex flex-col gap-5 justify-around uppercase text-sm flex-wrap  font-sub-heading bg-black p-5 z-50 absolute top-20 right-10 ">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavHashLink to="#about">About</NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="#skills">Skills</NavHashLink>
                  </li>

                  <li>
                    <NavHashLink to="#projects">Projects</NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="#contact">Contact</NavHashLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
