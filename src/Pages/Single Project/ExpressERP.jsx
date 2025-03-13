import React from "react";

function ExpressERP() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8">
          <div className="md:col-span-3 pr-10">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold font-heading  sm:text-3xl">
                Express ERP Solution
              </h2>

              <p className="mt-4 ">
                An employee management system where employees can submit their
                work, HR can monitor progress and request payments, and admins
                can manage users and process salaries.
              </p>
              <h3>
                <span className="font-bold font-sub-heading">Live link: </span>{" "}
                <br />
                <a
                  href="https://employe-management-syste-75cf0.web.app/"
                  className="text-blue-500"
                >
                  https://employe-management-syste-75cf0.web.app/
                </a>
              </h3>
              <h3>
                <span className="font-bold font-sub-heading">Github : </span>{" "}
                <br />
                <a
                  href="https://github.com/razu381/Express-ERP-Frontend"
                  className="text-blue-500"
                >
                  https://github.com/razu381/Express-ERP-Frontend
                </a>
              </h3>
              <h3>
                <span className="font-bold font-sub-heading">
                  Challenges faced :{" "}
                </span>
              </h3>
              <p>
                <b>Dynamic Role-Based Authorization (JWT): </b> <br />
                Implementing JWT-based role authorization presented a challenge
                with asynchronous data retrieval. Initially, role data was
                fetched from the database post-signup to populate the JWT. This
                led to timing issues where the JWT was generated before the role
                was available, resulting in missing role information.
                <br />
                <br />
                <b>Solution i used: </b>
                <br />
                Resolved by storing the user's role in localStorage immediately
                after signup, ensuring it was available for JWT generation.
              </p>
              <br />
              <h3>
                <span className="font-bold font-sub-heading">Roadmap : </span>
              </h3>
              <ol>
                <li>- Modernize the UI/UX design.</li>
                <li>
                  - Integrate Firebase SDK for direct role management,
                  eliminating database fetches.
                </li>
                <li>- Implement distinct admin and employee feature sets.</li>
              </ol>
            </div>
          </div>

          <div className="md:col-span-3">
            <img
              src="https://i.ibb.co.com/Fb2qJjCw/express-erp.png"
              className="rounded mb-2.5"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/S73vRKR3/work-progress.png"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpressERP;
