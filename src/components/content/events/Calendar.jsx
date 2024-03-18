'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import EventModal from "./EventModal";
import { useState } from "react";

const Calendar = () => {
  const [eventModal, setEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const hideEventModal = () => {
    setEventModal(false);
  };

  function onEventClick(e) {
    setSelectedEvent(e.event);
    setEventModal(true);
  }

  return (
    <>
      <EventModal
        show={eventModal}
        onHideModal={hideEventModal}
        event={selectedEvent}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          center: "",
          right: "today prev next",
        }}
        eventClick={onEventClick}
        events={[
          {
            id: "1",
            title: "World Domination",
            start: "2024-03-13T05:48:07+00:00",
            end: "2024-03-15T11:48:07+00:00",
            extendedProps: {
              location: "https://meet.google.com",
              team: "Research Team",
              description:
                "A meeting to brainstorm ideas on the new application to take over the world. The idea would then be implemented as our starting point in achieving our hopes and dreams to finally create a dystopian empire.",
            },
          },
        ]}
        eventColor={"#716DF2"}
        eventTextColor={"black"}
        initialView="dayGridMonth"
      />
    </>
  );
};

export default Calendar;
