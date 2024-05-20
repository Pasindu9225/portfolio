import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Card2 from "@/components/ui/Card2";
import { link } from "fs";

const AboutMe = () => {
  const projects = [
    {
      id: 1,
      title: "LinkedIn",
      description: "click heir to visit my LinkedIn profile.",
      logo: <FaLinkedin />,
      link: "https://www.linkedin.com/in/pasindu-gayan-462355268",
    },
    {
      id: 2,
      title: "Git Hub",
      description: "click heir to visit my Git Hub profile.",
      logo: <FaSquareGithub />,
      link: "https://github.com/Pasindu9225",
    },
    {
      id: 3,
      title: "Face Book",
      description: "click heir to visit my Face Book profile.",
      logo: <FaFacebookSquare />,
      link: "https://www.facebook.com/profile.php?id=100082293323488&mibextid=LQQJ4d",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          About Me
        </h2>
        <div className="mt-8 text-lg text-gray-700 dark:text-gray-300">
          <p>
            I'm currently an undergraduate at the University of Sri
            Jayawardhanapura, where I am pursuing my studies with a focus on
            computer science and software development. Over the past year, I
            have gained valuable experience in front-end development, honing my
            skills in creating dynamic, user-friendly web interfaces.
          </p>
          <p className="mt-4">
            Recently, I have started training in full-stack development,
            expanding my knowledge to include back-end technologies and
            practices. I am passionate about building seamless, efficient web
            applications and am always eager to learn and apply new
            technologies.
          </p>
          <p className="mt-4">
            In addition to my technical skills, I am a problem solver at heart
            and enjoy tackling complex challenges. My goal is to contribute to
            innovative projects that make a positive impact and to continually
            grow as a developer.
          </p>
        </div>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((media) => (
            <Card2 key={media.id} media={media} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
