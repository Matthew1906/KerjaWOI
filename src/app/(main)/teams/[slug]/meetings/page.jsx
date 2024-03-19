import { MeetingFilters, MeetingPagination } from "@/components/content/meetings";
import { meetings } from "@/app/lib/utils/data";

const Meeting = () => {
  return (
    <>
      <MeetingFilters />
      <MeetingPagination meetings={meetings}/>
    </>
  );
};

export default Meeting;
