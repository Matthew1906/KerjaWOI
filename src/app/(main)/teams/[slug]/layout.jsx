import { TeamHeader } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";
import { getTeam } from "@/app/controllers/team";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children, params }) {
    const slug = params.slug;
    const team = await getTeam(slug)
    const session = await getServerSession(authOptions);
    const lead = team.members.filter(member=>member.position==='LEAD')[0];
    const isLead = session.slug == lead.user.slug;
    const paths = [{ name: "Teams", to: "/teams" }, { name: `Team ${team.name}` }];
    return (
      <>
        <Title size="lg" className={poppins_700.className}>{team.name} Team</Title>
        <Breadcrumbs paths={paths} />
        <TeamHeader slug={slug} isLead={isLead}/>
        {children}
      </>
    );
}