'use client'

import { SelectInput, TextInput } from "@/components/input"
import { useState } from "react";

export const TeamNameEdit = ({slug})=>{
    const [teamName, setTeamName] = useState("Sekrum");
    const changeTeamName = (name) => setTeamName(name);
    return (
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <span className="mr-20">Team Name</span>:
          <TextInput
            placeholder={teamName}
            submit={changeTeamName}
            className="ml-4 bg-dark-white"
          />
        </span>
    )
}

export const TeamPermissionEdit = ()=>{
    const [defaultPermission, setDefaultPermission] = useState("can edit");
    const changePermission = (value) => setDefaultPermission(value);
    return (
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <span className="mr-4">Default Permission</span>:
          <SelectInput
            options={["can edit", "only view"]}
            onChange={changePermission}
            value={defaultPermission}
            className="ml-4"
            color="dark-white"
          />
        </span>
    )
}

export const TeamNotificationEdit = ()=>{
    const [notificationInterval, setNotificationInterval] = useState("1 day");
    const changeInterval = (value) => setNotificationInterval(value);
    return (
        <span className="ml-10 mb-5 mt-5 text-xl font-medium flex items-center">
          Send reminders to members through email
          <SelectInput
            options={["1 day", "3 days", "5 days", "1 week"]}
            onChange={changeInterval}
            value={notificationInterval}
            className="mx-2"
          />
          before deadline.
        </span>
    )
} 