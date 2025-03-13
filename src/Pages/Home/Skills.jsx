import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDaisyui, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiFirebaseLine, RiNodejsLine } from "react-icons/ri";

function Skills() {
  return (
    <div>
      <h2 className="font-heading font-semibold text-[50px] leading-tight pt-10 text-center ">
        My
        <span className="text-neongreen "> Skills</span>
      </h2>

      <div className="grid grid-cols-2 gap-5 my-10">
        <div className="bg-white/4 border border-neongreen rounded-4xl p-10">
          <h2 className="font-semibold text-center mb-2 text-3xl font-sub-heading">
            I am good at:{" "}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <FaReact size={40} />
            <IoLogoJavascript size={40} />
            <SiTailwindcss size={40} />
            <SiDaisyui size={40} />
            <IoLogoCss3 size={40} />
            <FaHtml5 size={40} />
          </div>
        </div>
        <div className="bg-white/4 border border-neongreen rounded-4xl p-10">
          <h2 className="font-semibold text-center mb-2 text-3xl font-sub-heading">
            I am familiar with:{" "}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <RiFirebaseLine size={40} />
            <RiNodejsLine size={40} />
            <SiExpress size={40} />
            <SiMongodb size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
