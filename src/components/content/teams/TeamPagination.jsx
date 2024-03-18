'use client'

import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
import { PageIndicator } from "@/components/utils";

const TeamPagination = ({teams})=>{
    // Initial states
    const [pages, setPages] = useState(1);
    const [current, setCurrent] = useState(1);
    // Pagination functions
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
    // Set page on initial render
    useEffect(() => {
        if (teams.length % 6 === 0) {
          setPages(teams?.length / 6);
        } else {
          setPages((teams?.length + (6 - (teams?.length % 6))) / 6);
        }
      }, [teams.length]);
    // return UI
    return (
        <>
        <div className="z-10 flex flex-row gap-10 flex-wrap justify-center p-2 mt-2">
            {teams.slice((current - 1) * 6, current * 6).map((team, key) => (
                <TeamCard
                    key={key}
                    name={team.name}
                    lead={team.lead}
                    members={team.members}
                    last_update={team.last_update}
                    slug={team.slug}
                />
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

export default TeamPagination;