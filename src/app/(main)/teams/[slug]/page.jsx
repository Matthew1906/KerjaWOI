import { ProjectFilters, ProjectPagination } from "@/components/content/projects";

const projects = [
  {
    name: "PapiKatering",
    desc: "Papi Katering is a Food Catering Web Application that is developed using MERN Stack",
  },
  {
    name: "Shoplexify",
    desc: "A Multi-page Online Shop Web Application that is developed using Flask as Backend and Bootstrap as Frontend",
  },
  { name: "KerjaWOI", desc: "A Project Management Web Application" },
];

const ProjectDashboard = async({params}) => {
  return (
    <>
      <ProjectFilters />
      <ProjectPagination projects={projects} />
    </>
  );
};

export default ProjectDashboard;
