'use client'

import Link from "next/link";
import { MemberList }from "@/components/content/members";
import { poppins_700 } from "@/app/lib/font";

const TeamCard = ({name, slug, lead, members, last_update}) => {
  return (
    <Link
      href={`/teams/${slug}`}
      className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg"
    >
      <h2 className={`lg:text-xl mb-2 ${poppins_700.className}`}>{name} Team</h2>
      <h6 className="text-xs lg:text-base mb-2">Lead : {lead}</h6>
      <h6 className="text-xs lg:text-base mb-2">
        Member : {members.length} people
      </h6>
      <h6 className="text-xs lg:text-base mb-2">
        Last Updated : {last_update}
      </h6>
      <MemberList members={members} limit={4} />
    </Link>
  );
};

export default TeamCard;
