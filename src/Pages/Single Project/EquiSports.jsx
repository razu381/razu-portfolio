import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function EquiSports() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8">
          <div className="md:col-span-3 pr-10">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold font-heading  sm:text-3xl">
                Equi Sport - a sport product shop
              </h2>
              <div className="grid grid-cols-5 lg:grid-cols-10 justify-center items-center gap-1 mt-4">
                <FaReact size={40} />
                <IoLogoJavascript size={40} />
                <SiTailwindcss size={40} />
                <SiMongodb size={40} />
                <SiExpress size={40} />
              </div>
              <p className="mt-4 ">
                Equi Sport is an online store where customers can browse and
                purchase a variety of sports equipment. Key features include: -
                Product viewing and addition to user accounts. - User-managed
                product listings (add, delete). - Implementation of core
                CRUD(Create, Read, Update, Delete) operations.
              </p>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Live link: </span>{" "}
                <br />
                <a
                  href="https://equi-sports-5d00a.web.app/"
                  className="text-blue-500"
                >
                  https://equi-sports-5d00a.web.app/
                </a>
              </h3>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Github : </span>{" "}
                <br />
                <a
                  href="https://github.com/razu381/Equi-sports-frontend"
                  className="text-blue-500"
                >
                  https://github.com/razu381/Equi-sports-frontend
                </a>
              </h3>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Roadmap : </span>
              </h3>
              <ol>
                <li>- Modernize the UI/UX design.</li>
                <li>- Adding complete ecommerce system</li>
                <li>
                  - National and international payment system eg.Bkash, Nagad,
                  stripe, paypal
                </li>
              </ol>
            </div>
          </div>

          <div className="md:col-span-3">
            <img
              src="https://i.ibb.co.com/XxYgyn55/equi-sports.png"
              className="rounded mb-2.5"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/Z1tSb2Kk/equi.png"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquiSports;
