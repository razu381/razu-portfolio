import React from "react";
import { Link } from "react-router";

function MyProjects() {
  return (
    <div id="projects">
      <h2 className="font-heading font-semibold text-[50px] leading-tight pt-10 text-center ">
        My
        <span className="text-neongreen "> Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div className="bg-white/5 mt-5">
          <div className="block rounded-lg  p-6 shadow-xs shadow-indigo-100">
            <img
              alt=""
              src="https://i.ibb.co.com/Fb2qJjCw/express-erp.png"
              className="h-56 w-full rounded-md object-cover pt-2"
            />

            <div className="mt-5 text-center">
              <p className="text-2xl font-bold font-sub-heading">Express ERP</p>
              <Link
                className="group flex items-center justify-center gap-4 rounded-lg px-5 py-3 transition-colors hover:bg-transparent "
                to="/projects/express"
              >
                <span className="font-medium text-neongreen transition-colors group-hover:text-neongreen">
                  Find out more
                </span>

                <span className="shrink-0 rounded-full border border-current bg-white p-2 text-neongreen">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="bg-white/5 mt-5">
          <div className="block rounded-lg  p-6 shadow-xs shadow-indigo-100">
            <img
              alt="Project 3"
              src="https://i.ibb.co.com/PsNh0MmP/Recommend-me.png"
              className="h-56 w-full rounded-md object-cover pt-2"
            />

            <div className="mt-5 text-center">
              <p className="text-2xl font-bold font-sub-heading">
                Recommend Me
              </p>
              <Link
                className="group flex items-center justify-center gap-4 rounded-lg px-5 py-3 transition-colors hover:bg-transparent "
                to="/projects/recommend"
              >
                <span className="font-medium text-neongreen transition-colors group-hover:text-neongreen">
                  Find out more
                </span>

                <span className="shrink-0 rounded-full border border-current bg-white p-2 text-neongreen">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Project-3 */}
        <div className="bg-white/5 mt-5">
          <div className="block rounded-lg  p-6 shadow-xs shadow-indigo-100">
            <img
              alt=""
              src="https://i.ibb.co.com/XxYgyn55/equi-sports.png"
              className="h-56 w-full rounded-md object-cover pt-2"
            />

            <div className="mt-5 text-center">
              <p className="text-2xl font-bold font-sub-heading">Equi Sport</p>
              <Link
                className="group flex items-center justify-center gap-4 rounded-lg px-5 py-3 transition-colors hover:bg-transparent "
                to="/projects/equi"
              >
                <span className="font-medium text-neongreen transition-colors group-hover:text-neongreen">
                  Find out more
                </span>

                <span className="shrink-0 rounded-full border border-current bg-white p-2 text-neongreen">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
