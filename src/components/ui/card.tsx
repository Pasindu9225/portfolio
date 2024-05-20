import React from "react";
import Image from "next/image";
import image from "../../../public/HiRes-17.jpg";

interface Project {
  title: string;
  description: string;
  technology: (
    | string
    | number
    | boolean
    | React.ReactNode
    | null
    | undefined
  )[];
}

const Card = ({ project }: { project: Project }) => {
  return (
    <div>
      <a
        href="#"
        className="block rounded-lg p-4 dark:bg-slate-600 dark:shadow-none shadow-sm shadow-indigo-100"
      >
        <Image
          alt={project.title}
          src={image}
          className="h-56 w-full rounded-md object-cover"
          width={1770}
          height={1180}
        />
        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Title</dt>
              <dd className="font-medium">{project.title}</dd>
            </div>
            <div>
              <dt className="sr-only">Description</dt>
              <dd className="text-sm text-gray-500">{project.description}</dd>
            </div>
          </dl>
          <div className="mt-6 flex items-center gap-4 text-md">
            <p>Used technologies:</p>
            {project.technology.map((tech, index) => {
              // Check if the tech is a valid ReactNode
              if (
                typeof tech === "string" ||
                typeof tech === "number" ||
                typeof tech === "boolean" ||
                React.isValidElement(tech)
              ) {
                return (
                  <span key={index} className="inline-flex items-center gap-2">
                    {tech}
                  </span>
                );
              } else if (
                tech !== null &&
                tech !== undefined &&
                typeof tech.toString === "function"
              ) {
                // Convert other types to string and render them
                return (
                  <span key={index} className="inline-flex items-center gap-2">
                    {tech.toString()}
                  </span>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
