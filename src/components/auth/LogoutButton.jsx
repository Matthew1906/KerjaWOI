'use client'

import LogoutIcon from "../../../public/svg/LogoutIcon"
import { signOut } from "next-auth/react"

const LogoutButton = ()=>{
    return (
        <button
            className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md"
            onClick={()=>signOut()}
            type='button'
        >
            <LogoutIcon/>
            <p className="text-white">Logout</p>
        </button>
    )
}

export default LogoutButton