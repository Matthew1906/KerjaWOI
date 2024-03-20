'use server'

import slugify from "slugify";
import { hash } from "bcrypt";
import prisma from "../lib/prisma";

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

export const getUser = async(slug)=>{
    const user = await prisma.user.findUnique({ 
        where: { slug: slug },
        select:{
            name:true,
            email:true,
            dob:true,
            profileImage:true
        }
    })
    return user;
}