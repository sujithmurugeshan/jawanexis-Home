const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.internshipApplication.findMany().then(console.log).finally(() => prisma.$disconnect());
