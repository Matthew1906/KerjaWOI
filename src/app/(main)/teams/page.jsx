import { TeamFilters, TeamPagination } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";
import { poppins_700 } from "@/app/lib/font";
import { teams } from "@/app/lib/utils/data";

const Teams = async() => {
  const paths = [{ name: "Teams" }];
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
