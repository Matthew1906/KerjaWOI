import slugify from "slugify";
import { hash } from "bcrypt";
import { prisma } from "../lib/prisma";

export const registerUser = async(userData)=>{
    const { name, email, password } = userData;
    const hashedPassword = await hash(password, 13);
    await prisma.user.upsert({
        where:{email:email},
        update:{},
        create:{
            name:name,
            email:email,
            password:hashedPassword,
            slug:slugify(name)
        }
    })
}