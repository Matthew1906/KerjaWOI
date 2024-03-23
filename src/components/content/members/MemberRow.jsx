'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { SelectInput } from "@/components/input";
import { deleteTeamMember, updateMemberPermission, updateMemberRole } from "@/app/controllers/team";

const permissionMapping =  {
  'EDIT': 'can edit',
  'VIEW': 'only view',
}

const MemberRow = ({ team, name, slug, email, role, permission, image, pending, admin }) => {
    const router = useRouter();
    const currentPermission = role==='LEAD'?'Admin':permissionMapping[permission];
    const [editPermission, setEditPermission] = useState(false);
    const changePermission = async(newPermission) => {
      await updateMemberPermission(slug, team, newPermission)
      setEditPermission(false);
      router.refresh()
    };
    const [editRole, setEditRole] = useState(false);
    const changeRole = async(newRole) => {
      await updateMemberRole(slug, team, newRole)
      setEditRole(false);
      router.refresh()
    };
    const handleDelete = async(event)=>{
      event.preventDefault();
      await deleteTeamMember(team, slug)
      router.refresh();
    }
    return (
      <ul className={`grid grid-cols-10 ${pending?"opacity-50":""}`}>
        <li className="col-span-3 p-3 flex items-center">
          <Image src={image} alt={name} width={40} height={40} className="rounded-full mr-3" />
          <div className="flex flex-col justify-center items-start">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{email}</p>
          </div>
        </li>
        <li className="col-span-3 p-3 flex items-center">
          {editRole ? (
            <SelectInput
              options={['CLIENT', 'MEMBER', 'COLLABORATOR']}
              value={role}
              onChange={changeRole}
              color="white"
            />
          ) : (
            <p>{pending?'PENDING':role}</p>
          )}
          {admin && role !== "LEAD" && !pending && !editRole && (
            <AiOutlineEdit onClick={() => setEditRole(true)} />
          )}
        </li>
        <li className="col-span-3 p-3 flex items-center">
        {editPermission ? (
            <SelectInput
            options={["Admin", "can edit", "only view"]}
            value={currentPermission}
            onChange={changePermission}
            color="white"
            disabled={role==='LEAD' || pending}
          />
          ) : (
            <p>{currentPermission}</p>
          )}
          {admin && role !== "LEAD" && !pending && !editPermission && (
            <AiOutlineEdit onClick={() => setEditPermission(true)} />
          )}
        </li>
        {admin && role !== "LEAD" && (
          <li className="cursor-pointer col p-3 flex justify-center items-center text-xl md:text-2xl text-[#FF0000]">
            <form onSubmit={handleDelete}>
              <button>
                <AiFillDelete className="hover:drop-shadow-lg" />
              </button>
            </form>
          </li>
        )}
      </ul>
    );
  };

export default MemberRow;