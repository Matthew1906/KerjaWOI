import { MeetingFilters, MeetingPagination } from "@/components/content/meetings";

const meetings = [
  {
    title: "World Domination Preparation",
    date:"23 January 2025",
    location: "https://meet.google.com",
    time:"10.00 - 14.00"
  },
  {
    title: "Post-Apocalypse Reparation",
    date:"2 March 2028",
    location: "22nd Baker Street, London",
    time:"13.00 - 16.00"
  },
  {
    title: "Growtopia Development",
    date:"14 December 2032",
    location: "3rd Longeastern Lane",
    time:"19.00 - 22.00"
  },
];


const Meeting = () => {
  return (
    <>
      <MeetingFilters />
      <MeetingPagination meetings={meetings}/>
    </>
  );
};

export default Meeting;
