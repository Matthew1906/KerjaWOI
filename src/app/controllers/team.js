'use server'

import slugify from "slugify";
import prisma from "../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const getTeams = async(query, user)=>{
    const teams = await prisma.team.findMany({
        where:{ 
            name: {contains:query, mode:'insensitive'},
            members: {
                some:{
                    userName: user
                }
            }
        },
        include: { 
            members: {
                include: { user: true }
            } 
        }
    });
    return teams;
}


export const getTeam = async(slug)=>{
    const team = await prisma.team.findUnique({
        where: {slug:slug},
        include: { 
            members: {
                include: { user: true }
            } 
        }
    })
    return team;
}

export const getTeamMembers = async(slug, query)=>{
    const teamMembers = await prisma.teamMember.findMany({
        where:{
            teamName:slug,
            user:{
                name: {contains:query, mode:'insensitive'},
            }
        },
        include: { user: true }
    })
    const teamLead = await prisma.teamMember.findFirst({
        where:{
            teamName:slug,
            position:'LEAD'
        }
    })
    return {members:teamMembers, lead:teamLead.userName }
}

const permissionMapping = {
    'can edit': 'EDIT',
    'only view': 'VIEW',
}

const notificationMapping = {
    "1 day": 'D1',  
    "3 days": 'D3', 
    "5 days": 'D5',
    "1 week": 'W1'
}

export const updateTeamSettings = async(slug, formData)=>{
    const permission = formData.get('permission')
    const notification = formData.get('notification')
    await prisma.team.update({
        where: {slug:slug},
        data:{
            permission: permissionMapping[permission],
            notification: notificationMapping[notification],
        }
    });
    revalidatePath(`/teams/${slug}/settings`);
    redirect(`/teams/${slug}/settings`);
}

export const inviteTeamMember = async(data)=>{
    const { team:slug, email } = data;
    const team = await prisma.team.findFirst({
        where: {slug:slug}
    })
    const user = await prisma.user.findFirst({
        where: {email:email}
    })
    if(!user){
        return {
            status:false,
            message:'User does not exist!'
        }
    }
    const teamMember = await prisma.teamMember.findFirst({
        where:{userName:user.slug, teamName:team.slug}
    })
    if(teamMember){
        return {
            status:false,
            message:'You have invited this user!'
        }
    }
    await prisma.teamMember.create({
        data:{
            userName:user.slug,
            teamName:team.slug,
        }
    })
    return { status:true }
}

export const deleteTeam = async(slug)=>{
    await prisma.team.delete({where:{slug:slug}});
    revalidatePath('/teams');
    redirect('/teams');
}