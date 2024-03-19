import { MemberFilters, MemberTable } from "@/components/content/members";
import { members } from "@/app/lib/utils/data";

const Members = async({ admin }) => {
  return (
    <>
      <MemberFilters admin={admin}/>
      <MemberTable members={members} admin={admin}/>
    </>
  );
};

export default Members;
