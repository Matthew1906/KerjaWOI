import { TeamHeader } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/config/font";

export default function RootLayout({ children, params }) {
    const paths = [{ name: "Teams", to: "/teams" }, { name: "Team Sekrum" }];
    return (
      <>
        <Title size="lg" className={poppins_700.className}>Team Sekrum</Title>
        <Breadcrumbs paths={paths} />
        <TeamHeader team={params.slug} />
        {children}
      </>
    );
}