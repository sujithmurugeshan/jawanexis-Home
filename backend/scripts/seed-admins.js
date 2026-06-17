// Admin Seed Script — creates admin accounts in production database
// Usage: node backend/scripts/seed-admins.js
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const ADMIN_PASSWORD = 'jawaedtech';

const admins = [
  { name: 'Soorya Jawahar',       email: 'sooryajawahar@gmail.com' },
  { name: 'Allwin Ranjith Kumar', email: 'allwinranjithkumar@gmail.com' },
  { name: 'Jawa EdTech',          email: 'jawaedtech@gmail.com' },
];

async function main() {
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

  for (const admin of admins) {
    const existing = await prisma.user.findUnique({ where: { email: admin.email } });

    if (existing) {
      // Update to admin if not already
      await prisma.user.update({
        where: { email: admin.email },
        data: { isAdmin: true, passwordHash, name: admin.name }
      });
      console.log(`✅ Updated: ${admin.email}`);
    } else {
      await prisma.user.create({
        data: {
          name: admin.name,
          email: admin.email,
          passwordHash,
          isAdmin: true,
          googleOauth: false,
        }
      });
      console.log(`✅ Created: ${admin.email}`);
    }
  }

  console.log('\n🎉 All admin accounts are ready!');
  console.log(`📧 Password for all admins: ${ADMIN_PASSWORD}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
