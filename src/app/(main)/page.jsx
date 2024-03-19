import { DeadlineBoard } from "@/components/content/events"
import { Title } from "@/components/utils";
import { poppins_700 } from "@/config/font";
import { meetings, deadlines } from "@/config/utils/data";

const Dashboard = async() => {
  return (
    <>
      <Title size="sm" className={poppins_700.className}>Welcome, John!</Title>
      <h2 className="py-5 border-b border-Gray text-lg">
        Here are the upcoming events for you
      </h2>
      <div className="mt-10 flex justify-around">
        <DeadlineBoard title="Meetings" deadlines={[...meetings, ...meetings]} purpose="meeting"/>
        <DeadlineBoard title="Deadlines" deadlines={deadlines} purpose="task" />
      </div>
    </>
  );
};

export default Dashboard;