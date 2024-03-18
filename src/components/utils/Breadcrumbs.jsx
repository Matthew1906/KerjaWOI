'use client'

import Link from "next/link";

const Breadcrumbs = ({ paths }) => {
  return (
    <div className="flex mt-3 md:mt-7">
      {paths.map((path, key) => {
        return (
          <span className="text-xs md:text-lg text-black/50" key={key}>
            <Link
              href={path.to ? path.to : "#"}
              className={
                path.to &&
                "hover:underline hover:font-bold hover:text-dark-blue"
              }
            >
              {path.name}
            </Link>
            {key !== paths.length - 1 && (
              <span className="mx-1 md:mx-3">&gt;</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
