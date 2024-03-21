import { Button } from "@/components/utils";
import { TeamNameEdit, TeamNotificationEdit, TeamPermissionEdit } from "./(settings)";
import { poppins_700 } from "@/app/lib/font";
import { getTeamSettings, updateTeamSettings } from "@/app/controllers/team";

const Settings = async({params}) => {
  const team = await getTeamSettings(params.slug);
  const handleSubmit = updateTeamSettings.bind(null, params.slug)
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
          <Button color="Orange" className="float-left" type='button'>
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
