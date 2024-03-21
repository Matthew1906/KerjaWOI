import { TeamFilters, TeamPagination } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";
import { getTeams } from "@/app/controllers/team";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Teams = async({searchParams}) => {
  const paths = [{ name: "Teams" }];
  const query = searchParams?.query || '';
  const session = await getServerSession(authOptions);
  const teams = await getTeams(query, session.slug);
  return (
    <>
      <Title size="lg" className={poppins_700.className}>Teams</Title>
      <Breadcrumbs paths={paths} />
      <TeamFilters />
      <TeamPagination teams={teams} />
    </>
  );
};

export default Teams;
