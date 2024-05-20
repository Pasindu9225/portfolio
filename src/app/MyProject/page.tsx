import React from "react";
import Card from "../../components/ui/card";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiClerk } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one.",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <FaCss3Alt key="css" />,
    ],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          My Projects
        </h2>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
