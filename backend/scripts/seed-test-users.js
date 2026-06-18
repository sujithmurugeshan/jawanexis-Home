require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 12);
  
  const testUsers = [
    { name: 'Test User 1', email: 'test1@example.com' },
    { name: 'Test User 2', email: 'test2@example.com' },
    { name: 'Test User 3', email: 'test3@example.com' },
  ];

  for (const user of testUsers) {
    const existingUser = await prisma.user.findUnique({ where: { email: user.email } });
    
    if (existingUser) {
      await prisma.user.update({
        where: { email: user.email },
        data: { passwordHash, name: user.name, isAdmin: false }
      });
      console.log(`Updated test user: ${user.email}`);
    } else {
      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          passwordHash,
          isAdmin: false,
          googleOauth: false,
        }
      });
      console.log(`Created test user: ${user.email}`);
    }
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
