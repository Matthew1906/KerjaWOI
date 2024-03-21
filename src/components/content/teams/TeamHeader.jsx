import { AiFillProject } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillCameraVideoFill,
  BsGearFill,
} from "react-icons/bs";
import Link from "next/link";
import { poppins_700 } from "@/app/lib/font";

const TeamHeader = async({slug, isLead=true}) => {
  return (
    <ul className={`navbar flex justify-center border-b-2 mt-12 ${poppins_700.className}`}>
      <Link href={`/teams/${slug}`}>
      <li
        className="flex items-center 
            text-lg text-Gray 
            mr-32 pb-2 border-b-4 border-transparent
            hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple"
      >
        <AiFillProject className="w-5 h-5 fill-Gray" />{" "}
        <span className="ml-1">Projects</span>
      </li>
      </Link>
      <Link href={`/teams/${slug}/members`}>
      <li
        className="flex items-center 
            text-lg text-Gray 
            mr-32 pb-2 border-b-4 border-transparent
            hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple"
      >
        <BsFillPersonFill className="w-5 h-5 fill-Gray" />{" "}
        <span className="ml-1">Members</span>
      </li>
      </Link>
      <Link href={`/teams/${slug}/meetings`}>
      <li
        className="flex items-center 
            text-lg text-Gray 
            mr-32 pb-2 border-b-4 border-transparent
            hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple"
      >
        <BsFillCameraVideoFill className="w-5 h-5 fill-Gray" />{" "}
        <span className="ml-1">Meeting</span>
      </li>
      </Link>
      { isLead && 
      <Link href={`/teams/${slug}/settings`}>
      <li
        className="flex items-center 
            text-lg text-Gray 
            mr-32 pb-2 border-b-4 border-transparent
            hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple"
      >
        <BsGearFill className="w-5 h-5 fill-Gray" />{" "}
        <span className="ml-1">Settings</span>
      </li>
      </Link>
      }
    </ul>
  );
};

export default TeamHeader;
