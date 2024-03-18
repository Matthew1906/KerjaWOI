'use client'

import Image from "next/image";
import { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { SelectInput, TextInput } from "@/components/input";

const MemberRow = ({ name, email, role, permission, image, admin }) => {
    const [currPermission, setPermission] = useState(permission);
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
      <ul className="grid grid-cols-10">
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
            <p>{currentRole}</p>
          )}
          {admin && role !== "Project Leader" && !editRole && (
            <AiOutlineEdit onClick={() => setEditRole(true)} />
          )}
        </li>
        <li className="col-span-3 p-3 flex items-center">
          {admin ? (
            <SelectInput
              options={["Admin", "Can Edit", "Only View"]}
              value={currPermission}
              onChange={changePermission}
              color="white"
            />
          ) : (
            <p className="p-2 bg-dark-white rounded-md drop-shadow text-center">
              {permission}
            </p>
          )}
        </li>
        {admin && role !== "Project Leader" && (
          <li className="cursor-pointer col p-3 flex justify-center items-center text-xl md:text-2xl text-[#FF0000]">
            <AiFillDelete className="hover:drop-shadow-lg" />
          </li>
        )}
      </ul>
    );
  };

export default MemberRow;