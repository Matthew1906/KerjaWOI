import { prisma } from "@/app/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    pages:{
        signIn: '/login'
    },
    session:{
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            name: 'Credentials',
            async authorize(credentials){
                'use server'
                if(!credentials?.email || !credentials?.password){
                    return null;
                }
                const user = await prisma.user.findUnique({
                   where:{ email: credentials.email } 
                })
                if(!user){
                    return null;
                }
                const isValid = await compare(credentials.password, user.password)
                if(!isValid){
                    return null;
                }
                return {
                    id: user.id +"",
                    email: user.email,
                    name: user.name,
                    slug: user.slug
                }
            }
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks: {
        session:({session, token})=>{
            return token;
        },
        jwt:({token, user})=>{
            if(user){
                return {...token, id:user.id, slug:user.slug}
            }
            return token;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
