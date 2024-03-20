const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcrypt");

const prisma = new PrismaClient();

async function main(){
    const password_joko = await hash('joko', 13);
    const password_maria = await hash('maria', 13);
    // Seed users
    const joko = await prisma.user.upsert({
        where: { email: 'joko@kerjawoi.co.id' },
        update: {},
        create: {
          email: 'joko@kerjawoi.co.id',
          name: 'Joko',
          slug: 'joko',
          password: password_joko
        },
    })
    const maria = await prisma.user.upsert({
      where: { email: 'maria@kerjawoi.co.id' },
        update: {},
        create: {
          email: 'maria@kerjawoi.co.id',
          name: 'Maria',
          slug: 'maria',
          password: password_maria
        },
    })
    // seed teams
    const team1 = await prisma.team.upsert({
      where: {slug:'midnight-suns'},
      update: {},
        create: {
          name:'Midnight Suns',
          slug:'midnight-suns'
        },
    })
    const team2 = await prisma.team.upsert({
      where: {slug:'justice-league'},
      update: {},
        create: {
          name:'Justice League',
          slug:'justice-league'
        },
    })
    const teamleader1 = await prisma.teamMember.upsert({
      where:{userName_teamName:{userName:'joko', teamName:'midnight-suns'}},
      update:{},
      create:{
        userName:'joko',
        teamName:'midnight-suns',
        pending:false,
        position: "LEAD"        
      }
    })
    const teamleader2 = await prisma.teamMember.upsert({
      where:{userName_teamName:{userName:'maria', teamName:'justice-league'}},
      update:{},
      create:{
        userName:'maria',
        teamName:'justice-league',
        pending:false,
        position: "LEAD"        
      }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })