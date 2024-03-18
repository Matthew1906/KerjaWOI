'use client'

import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import { poppins_600, poppins_700 } from "@/config/font";

const DeadlineCard = ({ team, desc, date, time, purpose, attendees, link }) => {
  return (
    <div className="mt-7 p-5 border-Gray border rounded-md">
      <h3 className={`text-xl mb-2 ${poppins_700.className}`}>{team}</h3>
      <h4 className="mb-2 font-medium">{desc}</h4>
      <span className={`font-medium ${purpose === "task" && "text-[#FF0000]"}`}>
        {date} • {time}
      </span>
      <div
        className={`mt-5 flex ${
          purpose === "meeting" ? "justify-between" : "justify-end"
        }`}
      >
        {purpose === "meeting" && (
          <p className="text-Gray text-sm">{attendees} Participant(s)</p>
        )}
        <Link
          href={link ? link : "#"}
          className={`flex gap-2 items-center ${poppins_600.className} ${
            purpose === "task" ? "text-Orange" : "text-bright-purple"
          }`}
        >
          View Details <BsArrowRightCircle />
        </Link>
      </div>
    </div>
  );
};

export default DeadlineCard;
