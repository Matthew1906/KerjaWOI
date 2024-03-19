import { prisma } from "@/app/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            name: 'Sign in',
            credentials:{
                email: {
                    label:'Email',
                    type:'email',
                    placeholder:'hello@example.com'
                },
                password: {
                    label:'Password',
                    type:'password'
                }
            },
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
    secret : process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }