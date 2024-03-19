import { Calendar } from "@/components/content/events";
import "@/config/css/calendar.module.css";

const CalendarPage = () => {
  return (
    <>
      <h1 className="text-black text-3xl font-bold">Calendar</h1>
      <div className="my-8">
        <Calendar />
      </div>
    </>
  );
};

export default CalendarPage;
