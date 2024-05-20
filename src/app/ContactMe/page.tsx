"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@/components/ui/Alert";

const page = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_azc2r0z", "template_bxw7bok", form.current, {
        publicKey: "w4OqstOckFuitp1ui",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          <Alert msg="Email sent successfully" />;
          // Clear form fields after successful submission
          form.current.reset();
        },
        (error) => {
          <Alert msg={`Error: ${error.text}`} />;
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Contact Us
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
