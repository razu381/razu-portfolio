import React from "react";

function EquiSports() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8">
          <div className="md:col-span-3 pr-10">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold font-heading  sm:text-3xl">
                Alternative product Recommendation Site
              </h2>

              <p className="mt-4 ">
                A recommendation platform where users can request alternative
                product suggestions, and the community can provide personalized
                recommendations.
              </p>
              <br />
              <h3>
                <span className="font-bold font-sub-heading">Live link: </span>{" "}
                <br />
                <a
                  href="https://recommendme-35a11.web.app/"
                  className="text-blue-500"
                >
                  https://recommendme-35a11.web.app/
                </a>
              </h3>
              <br />
              <h3>
                <span className="font-bold font-sub-heading">Github : </span>{" "}
                <br />
                <a
                  href="https://github.com/razu381/Recommend-me-client"
                  className="text-blue-500"
                >
                  https://github.com/razu381/Recommend-me-client
                </a>
              </h3>
              <br />
              <h3>
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
