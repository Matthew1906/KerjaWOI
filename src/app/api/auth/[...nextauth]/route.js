import prisma from "@/app/lib/prisma";
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
                    return {
                        error: 'empty'
                    };
                }
                const user = await prisma.user.findUnique({
                   where:{ email: credentials.email } 
                })
                if(!user){
                    return { 
                        error: "email"
                    };
                }
                const isValid = await compare(credentials.password, user.password)
                if(!isValid){
                    return {
                        error: "password"
                    };
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
        }, 
        signIn({ user, account, profile, email, credentials }) {
            if(user?.error == 'empty'){
                throw new Error('Credentials must not be empty')
            }
            else if (user?.error == 'email') {
                throw new Error('Invalid email address')
            }
            else if (user?.error == 'password') {
                throw new Error('Invalid password')
            }
            return true;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
