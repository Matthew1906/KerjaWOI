'use server'

import slugify from "slugify";
import { hash } from "bcrypt";
import prisma from "../lib/prisma";
import { uploadImage } from "../lib/imagekit";

// Create User
export const registerUser = async(userData)=>{
    const { name, email, password } = userData;
    const hashedPassword = await hash(password, 13);
    const slug = slugify(name.toLowerCase());
    const existingUsers = await prisma.user.count({where:{slug:slug}})
    await prisma.user.upsert({
        where:{email:email},
        update:{},
        create:{
            name:name,
            email:email,
            password:hashedPassword,
            slug: `${slug}${existingUsers>0 ? `-${existingUsers}`: ''}`
        }
    })
    return true;
}

// Read User
export const getUser = async(slug)=>{
    const user = await prisma.user.findUnique({ 
        where: { slug: slug },
        select:{
            name:true,
            email:true,
            dob:true,
            profileImage:true,
            slug:true
        }
    })
    return user;
}

// Update User
export const updateUser = async(data)=>{
    const { name, slug, dob, image } = data;
    const {imageId, image:imageResult} = await uploadImage(image, `${slug}.jpg`, 'users');
    await prisma.user.update({
        where: { slug: slug },
        data: {
            name:name,
            dob:new Date(dob),
            profileImage: imageResult,
            profileImageId: imageId
        }
    })
    return true;
}