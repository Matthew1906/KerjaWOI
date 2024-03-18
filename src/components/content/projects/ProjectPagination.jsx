'use client'

import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { PageIndicator } from "@/components/utils";

const ProjectPagination = ({projects})=>{
    const [pages, setPages] = useState(1);
    const [current, setCurrent] = useState(1);
    const prevPage = () => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    };
    const nextPage = () => {
        if (current < pages) {
            setCurrent(current + 1);
        }
    };
    useEffect(() => {
        if (projects.length % 6 === 0) {
        setPages(projects.length / 6);
        } else {
        setPages((projects.length + (6 - (projects.length % 6))) / 6);
        }
    }, [projects.length]);
    // render paginated projects
    return(
        <>
        <div className="z-10 flex flex-row gap-10 flex-wrap justify-center p-2 mt-2">
            {projects
            .slice((current - 1) * 6, current * 6)
            .map((project, key) => (
                <ProjectCard key={key} name={project.name} desc={project.desc} />
            ))}
        </div>
        <PageIndicator
            pages={pages}
            current={current}
            prev={prevPage}
            next={nextPage}
        />
        </>
    )
}

export default ProjectPagination;