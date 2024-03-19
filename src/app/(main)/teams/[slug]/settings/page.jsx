import { Button } from "@/components/utils";
import { TeamNameEdit, TeamNotificationEdit, TeamPermissionEdit } from "./(settings)";
import { poppins_700 } from "@/app/lib/font";

const Settings = ({params}) => {
  return (
    <>
      <div className="mt-12">
        <h1 className={`text-xl md:text-2xl text-black ${poppins_700.className}`}>General</h1>
        <TeamNameEdit slug={params.slug} />
        <TeamPermissionEdit slug={params.slug}/>
      </div>
      <div className="mt-6">
        <h1 className={`text-xl md:text-2xl text-black ${poppins_700.className}`}>
          Notifications
        </h1>
        <TeamNotificationEdit slug={params.slug}/>
        <Button color="Orange" className="float-right">
          Delete Team
        </Button>
      </div>
    </>
  );
};

export default Settings;
