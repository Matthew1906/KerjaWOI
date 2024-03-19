'use client'

import Image from "next/image";
import { useReducer } from "react";
import { FileButton, Input } from "@/components/input";
import { Button } from "@/components/utils";

const updateData = (prevData, data) => ({
  ...prevData,
  ...data,
});

const userData = {
  name: "",
  email: "",
  password: "",
  dob: "",
  profileImage:"https://randomuser.me/api/portraits/men/6.jpg"
};

const Profile = () => {
  const [user, dispatchUser] = useReducer(updateData, userData);

  const valueChangeHandler = (name, value) => {
    console.log(name, value);
    dispatchUser({ [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1 className="text-black text-3xl font-bold">Profile</h1>
      <div className="my-8">
        <form className="flex flex-row gap-24" onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-y-8 w-5/6 items-center">
            <label htmlFor="fullName">Full Name</label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={valueChangeHandler}
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={valueChangeHandler}
            />
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={valueChangeHandler}
            />
            <label htmlFor="dob">Date Of Birth</label>
            <Input
              type="date"
              id="dob"
              name="dob"
              onChange={valueChangeHandler}
            />
            <Button type="submit" additionalClass="mt-8">
              Save
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-center w-1/4">
            <Image
              src={user.profileImage}
              width={100}
              height={100}
              className="rounded-full aspect-square object-cover shadow-md"
              alt="profile picture"
            />
            <FileButton
              name="profileImage"
              id="profileImage"
              onFileSelect={valueChangeHandler}
            >
              Upload
            </FileButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
