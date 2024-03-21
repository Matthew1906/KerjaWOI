import { MemberFilters, MemberTable } from "@/components/content/members";
// import { members } from "@/app/lib/utils/data";
import { getTeamMembers } from "@/app/controllers/team";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Members = async({params, searchParams}) => {
  const slug = params.slug;
  const query = searchParams?.query || '';
  const { members, lead }= await getTeamMembers(slug, query)
  const session = await getServerSession(authOptions);
  const isLead = session.slug == lead;
  return (
    <>
      <MemberFilters admin={isLead} team={params.slug}/>
      <MemberTable members={members} admin={isLead}/>
    </>
  );
};

export default Members;
