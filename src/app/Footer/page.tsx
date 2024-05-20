import React, { useState } from "react";

const Page = () => {
  const Navlist = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Me", path: "/AboutMe" },
    { id: 3, name: "My Project", path: "/MyProject" },
    { id: 4, name: "Contact Me", path: "/ContactMe" },
  ];

  return (
    <div>
      <div className="mx-auto max-w-5xl flex flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Pasindu Gayan</h2>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed">
          Crafting digital experiences that transcend boundaries and captivate
          minds. © [PASINDU GAYAN] [2024]
        </p>

        <ul className="flex dark:text-white items-center text-md mt-7 gap-6">
          {Navlist.map((item) => (
            <li key={item.id}>
              <a
                className=" dark:text-gray-30 text-black hover:dark:text-white hover:text-gray-800"
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {/* Social media icons */}
        </ul>
      </div>
    </div>
  );
};

export default Page;
