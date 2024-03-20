'use server'

import slugify from "slugify";
import prisma from "../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const getTeams = async(query)=>{
    const teams = await prisma.team.findMany({
        where:{ name: {contains:query, mode:'insensitive'} },
        include: { 
            members: {
                include: { user: true }
            } 
        }
    });
    return teams;
}

export const createTeam = async(data)=>{
    const { teamName } = data;
    const teamSlug = slugify(teamName.toLowerCase())
    const existingTeams = await prisma.team.count({where:{slug:teamSlug}});
    if(existingTeams>0){
        return false;
    }
    const session = await getServerSession(authOptions);
    const team = await prisma.team.create({
        data:{
            name:teamName,
            slug:teamSlug
        }
    })
    const teamLead = await prisma.teamMember.upsert({
        where:{userName_teamName:{userName:session.slug, teamName:teamSlug}},
        update:{},
        create:{
            userName:session.slug,
            teamName:teamSlug,
            pending:false,
            position: "LEAD"        
        }
    })
    return true;
}