import React from "react";
import Card from "../../components/ui/card";
import { FaReact } from "react-icons/fa";
import { RiDrizzleFill, RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import portfolio from "@/../../public/Screenshot (158).png";
import fileShareAppImage from "@/../../public/Screenshot (143).png";
import movieApp from "@/../../public/Screenshot (165).png";
import ToDoApp from "@/../../public/Screenshot (132).png";
import QR from "@/../../public/Screenshot (166).png";
import Blog from "@/../../public/Screenshot (225).png";
import Extention from "@/../../public/Screenshot (199).png";
import aiapp from "@/../../public/Screenshot (238).png";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { GiGemini } from "react-icons/gi";

const projects = [
  {
    id: 1,
    title: "MERN Blog App",
    description: "CRUD operations with MERN stack blog app",
    link: "",
    image: Blog.src,
    technology: [
      <FaReact key="react" />,
      <SiMongodb key="mongodb" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 2,
    title: "Ai content creation app",
    description: "You can create your content simpally using one prompt",
    link: "",
    image: aiapp.src,
    technology: [
      <FaReact key="react" />,
      <SiClerk key="clerk" />,
      <GiGemini key="gemini" />,
      <RiDrizzleFill key="drizzle" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 2,
    title: "portfolio",
    description: "I made my portfolio",
    image: portfolio.src,
    link: "https://portfolio-eight-kappa-42.vercel.app/",
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <TbBrandTypescript key="typescript" />,
      <RiTailwindCssFill key="tailwind" />,
      <SiShadcnui key="shadcn" />,
      <SiClerk key="clerk" />,
    ],
  },
  {
    id: 3,
    title: "file sherer app",
    description: "File shere app. You can share your file",
    link: "#",
    image: fileShareAppImage.src,
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <FaCss3Alt key="css" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 4,
    title: "movie app",
    description: "There is a listed movies and details. Used movie API",
    link: "https://movi-app-one.vercel.app/",
    image: movieApp.src,
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 5,
    title: "ToDo App",
    description: "You can add your daily reminders",
    link: "#",
    image: ToDoApp.src,
    technology: [
      <FaReact key="react" />,
      <RiNextjsLine key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
      <TbBrandTypescript key="typescript" />,
    ],
  },
  {
    id: 6,
    title: "Chrome Extension",
    description: "You can change the background color",
    link: "#",
    image: Extention.src,
    technology: [<IoLogoJavascript key="javascript" />],
  },
  {
    id: 7,
    title: "QR code generator",
    description: "Convert any text to QR",
    link: "https://qr-generator-blush.vercel.app/",
    image: QR.src,
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
