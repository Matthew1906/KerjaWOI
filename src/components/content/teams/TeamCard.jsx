'use client'

import Link from "next/link";
import { MemberList }from "@/components/content/members";
import { poppins_700 } from "@/app/lib/font";

const TeamCard = ({team}) => {
  const { name, slug, members } = team;
  const memberImages = members.map((member)=>member.user?.profileImage??"/profile.jpg");
  const lead = members.filter(member=>member.position==='LEAD')[0]
  return (
    <Link
      href={`/teams/${slug}`}
      className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg"
    >
      <h2 className={`lg:text-xl mb-2 ${poppins_700.className}`}>{name} Team</h2>
      <h6 className="text-xs lg:text-base mb-2">Lead : {lead.user.name}</h6>
      <h6 className="text-xs lg:text-base mb-2">
        Member : {members.length} people
      </h6>
      <MemberList members={memberImages} limit={4} />
    </Link>
  );
};

export default TeamCard;
