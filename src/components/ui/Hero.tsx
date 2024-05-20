import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Hi, I'm <span className="block sm:inline">Pasindu</span>
          </h1>
          <p className="mt-4 text-3xl sm:text-5xl">
            A Passionate{" "}
            <span className="block sm:inline text-teal-600 dark:text-teal-400">
              Full Stack Developer
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-gray-700 dark:text-gray-300 sm:text-xl">
            I create dynamic and beautiful web applications using modern
            technologies. Let's build something amazing together!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/ContactMe"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="/MyProject"
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-transparent focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
