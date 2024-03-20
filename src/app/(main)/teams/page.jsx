import { TeamFilters, TeamPagination } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";
// import { teams } from "@/app/lib/utils/data";
import { getTeams } from "@/app/controllers/team";

const Teams = async({searchParams}) => {
  const paths = [{ name: "Teams" }];
  const query = searchParams?.query || '';
  const teams = await getTeams(query);
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
