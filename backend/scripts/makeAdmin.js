const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = "sooryajawahar@gmail.com";
  const password = "jawahar@123";

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.log(`Creating new admin user: ${email}`);
    const passwordHash = await bcrypt.hash(password, 12);
    user = await prisma.user.create({
      data: {
        name: "Administrator",
        email: email,
        passwordHash: passwordHash,
        isAdmin: true
      }
    });
    console.log(`Admin created. Email: ${email}, Password: ${password}`);
  } else {
    console.log(`User ${email} exists. Upgrading to Admin.`);
    user = await prisma.user.update({
      where: { email },
      data: { isAdmin: true }
    });
    console.log(`User ${email} is now an admin!`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
