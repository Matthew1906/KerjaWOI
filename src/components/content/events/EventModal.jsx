'use client'

import Link from "next/link";
import BaseModal from "../BaseModal";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPeopleFill, BsTextParagraph } from "react-icons/bs";

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventModal = ({ show, onHideModal, event }) => {
  let eventTime = "";
  if (event) {
    eventTime = `${dayNames[event.start.getDay()]}, ${
      monthNames[event.start.getMonth()]
    } ${event.start.getDate()} • ${event.start.getHours()}:${event.start.getMinutes()} - ${event.end.getHours()}:${event.end.getMinutes()}`;
  }

  console.log(event);

  return (
    <BaseModal show={show} onHideModal={onHideModal} className="w-5/12">
      {event && (
        <>
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-2xl font-bold text-dark-purple">
              {event.title}
            </h2>
            <p>{eventTime}</p>
          </div>
          <div className="grid grid-cols-[10%_90%] gap-y-4 items-center">
            <IoLocationSharp className="w-8 h-8 fill-Gray" />
            <Link
              href="https://meet.google.com/"
              className="text-lg underline"
              target="_blank"
              rel="noreferrer"
            >
              {event.extendedProps.location}
            </Link>

            <BsFillPeopleFill className="w-8 h-8 fill-Gray" />
            <p className="text-lg">{event.extendedProps.team}</p>

            <BsTextParagraph className="w-8 h-8 fill-Gray self-start pt-1" />
            <p className="text-lg">{event.extendedProps.description}</p>
          </div>
        </>
      )}
    </BaseModal>
  );
};

export default EventModal;
