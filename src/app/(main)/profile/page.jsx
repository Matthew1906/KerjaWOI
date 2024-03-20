import Image from "next/image";
import { Button } from "@/components/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser } from "@/app/controllers/user";

const Profile = async() => {
  const session = await getServerSession(authOptions);
  const user = await getUser(session.slug)
  return (
    <>
      <h1 className="text-black text-3xl font-bold">Profile</h1>
      <div className="my-8">
        <form className="flex flex-row gap-24">
          <div className="grid grid-cols-2 gap-y-8 w-5/6 items-center">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              defaultValue={user.name}
              className="bg-dark-white py-2 px-3 rounded-md"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={user.email}
              className="bg-dark-white py-2 px-3 rounded-md"
              disabled
            />
            {/* <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            /> */}
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              defaultValue={user.dob}
              className="bg-dark-white py-2 px-3 rounded-md"
            />
            <Button type="submit" color='Purple'>
              Save
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-center w-1/4">
            <Image
              src={user.profileImage?? '/profile.jpg'}
              width={100}
              height={100}
              className="rounded-full aspect-square object-cover shadow-md"
              alt="profile picture"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
