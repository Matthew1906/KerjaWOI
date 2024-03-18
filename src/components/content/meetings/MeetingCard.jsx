'use client'

import { AiFillCalendar } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import Button from "@/components/utils/Button";
import { poppins_600 } from "@/config/font";
import { MemberList } from "../members";



const MeetingCard = ({title, date, location, time}) => {
  const images = [...Array(14).keys()]
    .map(val=>`https://randomuser.me/api/portraits/men/${val+1}.jpg`)
  return (
    <div
      className="p-6 my-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
    >
      <span className={`text-xl ${poppins_600.className}`}>{title}</span>
      <div className="mt-2 grid grid-cols-4 gap-1 items-center">
        <AiFillCalendar className="w-5 h-5 fill-Gray mr-4" />
        <span className="col-span-3">{date}</span>
        <IoLocation className="w-5 h-5 fill-Gray mr-4" />
        <span className="col-span-3">{location}</span>
        <HiClock className="w-5 h-5 fill-Gray mr-4" />
        <span className="col-span-3">{time}</span>
      </div>
      <div className="mt-2 mb-4 flex flex-wrap">
        <MemberList members={images} limit={12}/>
      </div>
    </div>
  );
};

export default MeetingCard;
