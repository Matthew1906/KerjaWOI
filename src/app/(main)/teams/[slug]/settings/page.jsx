import { Button } from "@/components/utils";
import { TeamNameEdit, TeamNotificationEdit, TeamPermissionEdit } from "./(settings)";
import { poppins_700 } from "@/app/lib/font";
import { deleteTeam, getTeam, updateTeamSettings } from "@/app/controllers/team";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Settings = async({params}) => {
  const session = await getServerSession(authOptions);
  const team = await getTeam(params.slug);
  const lead = team.members.filter(member=>member.position==='LEAD')[0];
  if(session.slug !== lead.user.slug){
    redirect('/teams/'+params.slug);
  }
  const handleSubmit = updateTeamSettings.bind(null, params.slug);
  const handleDelete = deleteTeam.bind(null, params.slug);
  return (
    <form action={handleSubmit}>
      <div className="mt-12">
        <h1 className={`text-xl md:text-2xl text-black ${poppins_700.className}`}>General</h1>
        <TeamNameEdit slug={params.slug} name={team.name}/>
        <TeamPermissionEdit slug={params.slug} permission={team.permission}/>
      </div>
      <div className="mt-6">
        <h1 className={`text-xl md:text-2xl text-black ${poppins_700.className}`}>
          Notifications
        </h1>
        <TeamNotificationEdit slug={params.slug} notification={team.notification}/>
        <div className="mt-4">
          <Button color="Orange" className="float-left" type='button' onClick={handleDelete}>
            Delete Team
          </Button>
          <Button color="Purple" className="float-right">
            Update Team
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Settings;
