import React from "react";

function Contact() {
  return (
    <div className="mb-20" id="contact">
      <h2 className="font-heading font-semibold text-[50px] leading-tight pt-10 text-center mb-10">
        Contact
        <span className="text-neongreen "> Me</span>
      </h2>

      <section className="bg-white/5 rounded-4xl">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="flex flex-col gap-5 text-2xl">
                <p>
                  <b>Address:</b> Nokhali, Bangladesh
                </p>
                <p>
                  <b>Phone: </b> +8801317622631
                </p>
                <p>
                  <b>Email: </b> sirazu52@gmail.com
                </p>
                <p>
                  <b>Phone: </b> +8801317622631
                </p>
              </div>
            </div>

            <div className="rounded-lg lg:col-span-3 ">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className=" w-full rounded-lg border border-neongreen px-5 py-3 font-medium text-white hover:bg-neongreen"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
