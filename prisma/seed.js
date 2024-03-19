const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcrypt");

const prisma = new PrismaClient();

async function main(){
    const password = await hash('joko', 13);
    const joko = await prisma.user.upsert({
        where: { email: 'joko@kerjawoi.co.id' },
        update: {},
        create: {
          email: 'joko@kerjawoi.co.id',
          name: 'Joko',
          slug: 'joko',
          password: password
        },
    })
    console.log(joko);
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