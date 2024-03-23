'use client'

import MemberRow from "./MemberRow";

const MemberTable = ({admin, members, team})=>{
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
          { members?.length==0 && <p className="text-center mt-2 opacity-80">No members found</p>}
          {members.map((member, key) => {
            return (
              <MemberRow
                key={key}
                team={team}
                name={member.user.name}
                slug={member.user.slug}
                role={member.position}
                permission={member.permission}
                image={member?.user?.profileImage??"/profile.jpg"}
                email={member?.user?.email}
                admin={admin}
                pending={member.pending}
              />
            );
          })}
        </div>
      </div>
    )
}

export default MemberTable;