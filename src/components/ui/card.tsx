import React from "react";
import Image from "next/image";

const Card = ({ project }: any) => {
  return (
    <div>
      <a
        href="#"
        className="block rounded-lg p-4 dark:bg-slate-600 dark:shadow-none shadow-sm shadow-indigo-100"
      >
        <Image
          alt={project.title}
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
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
            {project.technology.map(
              (
                tech:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <span key={index} className="inline-flex items-center gap-2">
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
