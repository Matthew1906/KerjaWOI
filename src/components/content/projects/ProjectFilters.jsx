'use client'

import { useState } from "react"
import ProjectModal from "./ProjectModal"
import { SearchFilter } from "@/components/input"
import { Button } from "@/components/utils"
import { poppins_700 } from "@/app/lib/font"

const ProjectFilters = ()=>{
    const [addProject, setAddProject] = useState(false);
    const addProjectHandler = (e) => {
        console.log(e);
        setAddProject(false);
    };
    return (
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
            <SearchFilter
                name="Project"
                filters={["Last Updated", "Name"]}
            />
            <Button color="dark-purple" onClick={() => setAddProject(true)} className={poppins_700.className}>
                Add Project
            </Button>
            <ProjectModal
                show={addProject}
                onHideModal={() => setAddProject(false)}
                onSubmit={addProjectHandler}
            />
        </div>
    )
}

export default ProjectFilters;