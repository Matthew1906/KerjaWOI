'use client'

import Image from "next/image";
import { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { SelectInput, TextInput } from "@/components/input";

const permissionMapping =  {
  'EDIT': 'can edit',
  'VIEW': 'only view',
}


// TODO: Remove team member, change member permission / role

const MemberRow = ({ name, email, role, permission, image, pending, admin }) => {
    const [currPermission, setPermission] = useState(role==='LEAD'?'Admin':permissionMapping[permission]);
    console.log()
    const changePermission = (e) => {
      setPermission(e);
    };
    const [editRole, setEditRole] = useState(false);
    const [currentRole, setCurrentRole] = useState(role);
    const changeRole = (value) => {
      setCurrentRole(value);
      setEditRole(false);
    };
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
            <TextInput placeholder={currentRole} submit={changeRole} />
          ) : (
            <p>{pending?'PENDING':currentRole}</p>
          )}
          {admin && role !== "LEAD" && !pending && !editRole && (
            <AiOutlineEdit onClick={() => setEditRole(true)} />
          )}
        </li>
        <li className="col-span-3 p-3 flex items-center">
          {admin ? (
            <SelectInput
              options={["Admin", "can edit", "only view"]}
              value={currPermission}
              onChange={changePermission}
              color="white"
              disabled={role==='LEAD' || pending}
            />
          ) : (
            <p className="p-2 bg-dark-white rounded-md drop-shadow text-center">
              {permission}
            </p>
          )}
        </li>
        {admin && role !== "LEAD" && (
          <li className="cursor-pointer col p-3 flex justify-center items-center text-xl md:text-2xl text-[#FF0000]">
            <AiFillDelete className="hover:drop-shadow-lg" />
          </li>
        )}
      </ul>
    );
  };

export default MemberRow;