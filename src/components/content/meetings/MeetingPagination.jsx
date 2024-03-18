'use client'

import MeetingCard from "./MeetingCard";
import { useEffect, useState } from "react";
import { PageIndicator } from "@/components/utils";

const MeetingPagination = ({meetings})=>{
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
        if (meetings.length %4 === 0) {
            setPages(meetings.length /4);
        } else {
            setPages((meetings.length + (4 - (meetings.length %4))) /4);
        }
    }, [meetings.length]);
    return(
        <>
        <div className="z-10 flex flex-row gap-10 flex-wrap justify-center p-2 mt-2">
            {meetings
            .slice((current - 1) *4, current *4)
            .map((meeting, key) => (
                <MeetingCard key={key} title={meeting.title} date={meeting.date} location={meeting.location} time={meeting.time}/>
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

export default MeetingPagination;