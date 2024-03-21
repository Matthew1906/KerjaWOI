'use client'

import { SelectInput } from "@/components/input"
import { useState } from "react";

export const TeamNameEdit = ({name})=>{
    return (
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <label htmlFor="name" className="mr-20">Team Name</label>:
          <input
            type="text"
            name="name"
            defaultValue={name}            
            className={`grow outline-none p-2 rounded-md drop-shadow ml-4 bg-dark-white`}
          />
        </span>
    )
}


const permissionMapping =  {
  'EDIT': 'can edit',
  'VIEW': 'only view',
}

export const TeamPermissionEdit = ({slug, permission})=>{
    const [defaultPermission, setDefaultPermission] = useState(permissionMapping[permission]);
    const changePermission = (value) => setDefaultPermission(value);
    return (
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <label htmlFor='permission' className="mr-4">Default Permission</label>:
          <SelectInput
            options={["can edit", "only view"]}
            onChange={changePermission}
            value={defaultPermission}
            className="ml-4"
            color="dark-white"
            name="permission"
          />
        </span>
    )
}

const notificationMapping = {
  'D1':"1 day",  
  'D3':"3 days", 
  'D5':"5 days",
  'W1':"1 week"
}

export const TeamNotificationEdit = ({slug, notification})=>{
    const [notificationInterval, setNotificationInterval] = useState(notificationMapping[notification]);
    const changeInterval = (value) => setNotificationInterval(value);
    return (
        <span className="ml-10 mb-5 mt-5 text-xl font-medium flex items-center">
          Send reminders to members through email
          <SelectInput
            options={["1 day", "3 days", "5 days", "1 week"]}
            onChange={changeInterval}
            value={notificationInterval}
            className="mx-2"
            name="notification"
          />
          before deadline.
        </span>
    )
} 