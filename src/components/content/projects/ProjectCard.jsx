'use client'

import Link from "next/link";
import { poppins_700 } from "@/config/font";

const ProjectCard = ({name, desc}) => {
  return (
    <Link
      href={`${name}`}
      className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg"
    >
      <h2 className= {`lg:text-2xl mb-2 ${poppins_700.className}`}>{name}</h2>
      <p className="text-xs lg:text-base mb-2">{desc}</p>
    </Link>
  );
};

export default ProjectCard;
