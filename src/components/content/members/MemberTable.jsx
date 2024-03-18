'use client'

import MemberRow from "./MemberRow";

const MemberTable = ({admin, members})=>{
    return (
        <div className="z-10 p-2 mt-2 w-100 border">
        <div className="border-b">
          <ul className="grid grid-cols-10 font-bold">
            <li className="col-span-3 p-3 text-left mr-10">Member Name</li>
            <li className="col-span-3 p-3 text-left mr-10">Role</li>
            <li className="col-span-3 p-3 text-left mr-10">Permission</li>
            {admin && <li className="col p-3 text-left">Action</li>}
          </ul>
        </div>
        <div>
          {members.map((member, key) => {
            return (
              <MemberRow
                key={key}
                name={member.name}
                role={member.role}
                permission={member.permission}
                image={member.image}
                email={member.email}
                admin={admin}
              />
            );
          })}
        </div>
      </div>
    )
}

export default MemberTable;