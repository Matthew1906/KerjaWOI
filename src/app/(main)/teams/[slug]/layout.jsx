import { TeamHeader } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";
import { getTeamSettings } from "@/app/controllers/team";

export default async function RootLayout({ children, params }) {
    const slug = params.slug;
    const team = await getTeamSettings(slug)
    const paths = [{ name: "Teams", to: "/teams" }, { name: `Team ${team.name}` }];
    return (
      <>
        <Title size="lg" className={poppins_700.className}>{team.name} Team</Title>
        <Breadcrumbs paths={paths} />
        <TeamHeader team={slug} />
        {children}
      </>
    );
}