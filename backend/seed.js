const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 12);
  
  // Force update the HR user
  await prisma.user.upsert({
    where: { email: 'hr@jawaedtech.com' },
    update: { passwordHash, isAdmin: true, googleOauth: false },
    create: {
      email: 'hr@jawaedtech.com',
      name: 'HR Admin',
      phone: '0000000000',
      passwordHash,
      isAdmin: true,
      googleOauth: false,
    },
  });

  // Force update the Soorya user
  await prisma.user.upsert({
    where: { email: 'sooryajawahar@gmail.com' },
    update: { passwordHash, isAdmin: true, googleOauth: false },
    create: {
      email: 'sooryajawahar@gmail.com',
      name: 'Soorya Jawahar',
      phone: '0000000000',
      passwordHash,
      isAdmin: true,
      googleOauth: false,
    },
  });

  console.log('Admin users forced updated successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
