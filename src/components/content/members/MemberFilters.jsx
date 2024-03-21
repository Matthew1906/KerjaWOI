'use client'

import { useState } from "react";
import MemberModal from "./MemberModal";
import { SearchFilter } from "@/components/input"
import { Button } from "@/components/utils"

const MemberFilters = ({admin, team})=>{
    const [addPeople, setAddPeople] = useState(false);
    const addPeopleHandler = () => setAddPeople(false);
    return (
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
        <SearchFilter
          name="Member"
          filters={["Last Updated", "Name"]}
        />
        {admin && (
          <>
          <Button color="dark-purple" onClick={() => setAddPeople(true)}>
            Add Member
          </Button>
          <MemberModal
            show={addPeople}
            onHideModal={() => setAddPeople(false)}
            onSubmit={addPeopleHandler}
            slug={team}
          />
          </>
        )
        }
      </div>
    )
}

export default MemberFilters;