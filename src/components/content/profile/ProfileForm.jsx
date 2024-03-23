'use client'

import Image from "next/image"
import { Button } from "@/components/utils"
import useImage from "@/hooks/useImage";
import { useRef } from "react";
import { updateUser } from "@/app/controllers/user";
import { useRouter } from "next/navigation";
import { base64String } from "@/app/lib/utils/string";

const ProfileForm = ({user})=>{
    const formRef = useRef();
    const fileInputRef = useRef();
    const router = useRouter();
    const uploadImage = () => {
        fileInputRef.current.click();
    };
    const { image, uploadImage:saveImage, resetImage } = useImage(user?.profileImage);
    const handleUpdateProfile = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fetchedImage = await fetch(image);
        const blobImage = await fetchedImage.blob();
        const realImage = await base64String(blobImage);
        await updateUser({
            name: formData.get('name'),
            slug: user.slug,
            dob: formData.get('dob'),
            image: realImage
        });
        formRef.current.reset()
        resetImage()
        router.refresh();
    }
    return (
        <form className="flex flex-row gap-24" onSubmit={handleUpdateProfile} ref={formRef}>
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
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              defaultValue={user?.dob?.toISOString().split('T')[0]??null}
              className="bg-dark-white py-2 px-3 rounded-md"
            />
            <Button type="submit" color='Purple'>
              Save
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-center w-1/4">
            <Image 
                src={image??'/profile.jpg'} 
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full aspect-square object-cover shadow-md"
            />
            <input 
                type="file" ref={fileInputRef} accept="image/png, image/jpeg" 
                name="profileImage" id="profileImage" 
                className='hidden' onChange={saveImage}
            />
            <Button color='dark-purple'onClick={uploadImage} type='button'>Upload</Button>
          </div>
        </form>
    )
}

export default ProfileForm;