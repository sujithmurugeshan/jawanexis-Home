const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const students = [
    { name: "John Test", email: "student1@test.com", phone: "9876543210", password: "password123" },
    { name: "Jane Test", email: "student2@test.com", phone: "1234567890", password: "password123" },
  ];

  for (const student of students) {
    const existingUser = await prisma.user.findUnique({ where: { email: student.email } });
    if (!existingUser) {
      const passwordHash = await bcrypt.hash(student.password, 12);
      await prisma.user.create({
        data: {
          name: student.name,
          email: student.email,
          phone: student.phone,
          passwordHash: passwordHash,
          isAdmin: false
        }
      });
      console.log(`Created test student: ${student.email}`);
    } else {
      console.log(`Student ${student.email} already exists.`);
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
