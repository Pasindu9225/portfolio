import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
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
    <div className="block rounded-lg p-4 dark:bg-slate-600 dark:shadow-none shadow-sm shadow-indigo-100">
      <Link href={project.link} passHref>
        {project.image && (
          <Image
            alt={project.title}
            src={project.image}
            className="h-56 w-full rounded-md object-cover"
            width={1770}
            height={1180}
          />
        )}
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
            {project.technology.map((tech, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
