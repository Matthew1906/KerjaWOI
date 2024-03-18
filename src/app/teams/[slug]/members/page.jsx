import { MemberFilters, MemberTable } from "@/components/content/members";

const members = [
  {
    name: "Raymond Holt",
    email: "rayholt@gmail.com",
    role: "Project Leader",
    permission: "Admin",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Terrence Jeffords",
    email: "terry@gmail.com",
    role: "Member",
    permission: "Can Edit",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Gina Linetti",
    email: "gina@gmail.com",
    role: "Member",
    permission: "Can Edit",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Jake Peralta",
    email: "jake@gmail.com",
    role: "Member",
    permission: "Only View",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Amy Santiago",
    email: "santiago@gmail.com",
    role: "Member",
    permission: "Only View",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rosa Diaz",
    email: "goldfinch@gmail.com",
    role: "Member",
    permission: "Only View",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Charles Boyle",
    email: "chuck@gmail.com",
    role: "Member",
    permission: "Only View",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Members = async({ admin }) => {
  return (
    <>
      <MemberFilters admin={admin}/>
      <MemberTable members={members} admin={admin}/>
    </>
  );
};

export default Members;
