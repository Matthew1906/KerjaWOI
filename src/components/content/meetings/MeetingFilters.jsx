import { SearchFilter } from "@/components/input"
import { Button } from "@/components/utils"

const MeetingFilters = ()=>{
    return (
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
            <SearchFilter
                name="Meeting"
                filters={["Last Updated", "Name"]}
            />
            <Button color="dark-purple">Add Meeting</Button>
        </div>
    )
}

export default MeetingFilters;