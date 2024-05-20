import React from "react";

const Card2 = ({ media }: any) => {
  return (
    <div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <a href={media.link}>
          {" "}
          {/* Move the href to the wrapping div if necessary */}
          <div className="flex items-start sm:gap-8">
            <div
              className="hidden text-blue-600 text-4xl sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              {media.logo}
            </div>

            <div>
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Visit Me on
              </strong>

              <h3 className="mt-4 text-lg text-black font-medium sm:text-xl">
                <a href="#" className="hover:underline">
                  {media.title} {/* Uncommented title rendering */}
                </a>
              </h3>

              {/* <p className="mt-1 text-sm text-gray-700">{media.description}</p> */}

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  {media.description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card2;
