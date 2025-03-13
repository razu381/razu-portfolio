import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function RecommendMe() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8">
          <div className="md:col-span-3 pr-10">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold font-heading  sm:text-3xl">
                Alternative product Recommendation Site
              </h2>
              <div className="grid grid-cols-5 lg:grid-cols-10 justify-center items-center gap-1 mt-4">
                <FaReact size={40} />
                <IoLogoJavascript size={40} />
                <SiTailwindcss size={40} />
                <SiMongodb size={40} />
                <SiExpress size={40} />
              </div>

              <p className="mt-4 ">
                A recommendation platform where users can request alternative
                product suggestions, and the community can provide personalized
                recommendations.
              </p>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Live link: </span>{" "}
                <br />
                <a
                  href="https://recommendme-35a11.web.app/"
                  className="text-blue-500"
                >
                  https://recommendme-35a11.web.app/
                </a>
              </h3>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Github : </span>{" "}
                <br />
                <a
                  href="https://github.com/razu381/Recommend-me-client"
                  className="text-blue-500"
                >
                  https://github.com/razu381/Recommend-me-client
                </a>
              </h3>
              <h3 className="mt-4">
                <span className="font-bold font-sub-heading">Roadmap : </span>
              </h3>
              <ol>
                <li>- Modernize the UI/UX design.</li>
                <li>
                  - Paid recommendation system where experts can recommend
                  people products.
                </li>
                <li>- Star review system.</li>
              </ol>
            </div>
          </div>

          <div className="md:col-span-3">
            <img
              src="https://i.ibb.co.com/1G9C00yr/Recommend-me-queries.png"
              className="rounded mb-2.5"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/dJrJZFvC/Recommend-me.png"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecommendMe;
