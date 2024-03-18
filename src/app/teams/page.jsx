import { TeamFilters, TeamPagination } from "@/components/content/teams";
import { Breadcrumbs, Title } from "@/components/utils";

import { poppins_700 } from "@/config/font";

const teams = [
  {
    name: "Do Stuff",
    slug: 'do-stuff',
    lead: "Mr. Nobody",
    last_update: "25th May 2022",
    members: [
      "https://randomuser.me/api/portraits/men/46.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/men/36.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/29.jpg",
    ],
  },
  {
    slug: 'apple',
    name: "Apple",
    lead: "Mrs. Appleman",
    last_update: "23rd June 2022",
    members: [
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/36.jpg",
      "https://randomuser.me/api/portraits/men/46.jpg",
    ],
  },
];

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
