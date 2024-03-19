import { MemberFilters, MemberTable } from "@/components/content/members";
import { members } from "@/config/utils/data";

const Members = async({ admin }) => {
  return (
    <>
      <MemberFilters admin={admin}/>
      <MemberTable members={members} admin={admin}/>
    </>
  );
};

export default Members;
