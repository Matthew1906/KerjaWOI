import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser } from "@/app/controllers/user";
import ProfileForm from "@/components/content/profile/ProfileForm";

const Profile = async() => {
  const session = await getServerSession(authOptions);
  const user = await getUser(session.slug)
  return (
    <>
      <h1 className="text-black text-3xl font-bold">Profile</h1>
      <div className="my-8">
        <ProfileForm user={user}/>
      </div>
    </>
  );
};

export default Profile;
