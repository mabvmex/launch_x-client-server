/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta0',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });


  

    const student0 = await prisma.student.upsert({
        where: { name: 'WoopaStudent-0' },
        update: {},
        create: {
          name: 'WooSt-0',
                  name: 'ajoloStudent0',
                  lang: 'Spanish',
                  missionCommander: 'Sherpa1',
                  enrollments: 2
        },
      });



    const student1 = await prisma.student.upsert({
        where: { name: 'WoopaStudent-1' },
        update: {},
        create: {
          name: 'WooSt-1',
                  name: 'ajoloStudent1',
                  lang: 'Spanish',
                  missionCommander: 'Sherpa1',
                  enrollments: 2

        },
      });

    console.log('Create 3 explorers');

  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
