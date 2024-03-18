'use client'

import Image from "next/image";

const MemberList = ({ members, limit }) => {
  return (
    <span className="flex mt-2">
      {members.slice(0, limit).map((member, key) => {
        if (key === 0) {
          return (
            <Image 
              src={member} key={key} alt={key} 
              width={40} height={40}
              className="rounded-full"
            />
          );
        } else {
          return (
            <Image 
              src={member} key={key} alt={key} 
              width={40} height={40}
              className="rounded-full -ml-5"
            />
          );
        }
      })}
      {members.length > limit && (
        <div className="-ml-5 w-10 h-10 flex justify-center items-center rounded-full bg-Orange text-lg text-white font-semibold">
          +{members.length - limit}
        </div>
      )}
    </span>
  );
};

export default MemberList;
