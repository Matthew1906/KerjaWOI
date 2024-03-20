'use client'

import TeamModal from "./TeamModal";
import { useState } from "react";
import { SearchFilter } from "@/components/input";
import { Button } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";

const TeamFilters = ()=>{
    const [addTeam, setAddTeam] = useState(false);
    return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
        <SearchFilter
          name="Team"
          filters={['Name']}
        />
        <Button color="dark-purple" onClick={() => setAddTeam(true)} className={poppins_700.className}>
          Add Team
        </Button>
        <TeamModal
            show={addTeam}
            onHideModal={() => setAddTeam(false)}
            onSubmit={()=>setAddTeam(false)}
        />
      </div>
    )
}

export default TeamFilters;