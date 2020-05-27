import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedData() {
  await prisma.connect();
  await prisma.roles.create({
    data: {
      role: "ADMIN"
    }
  });
  await prisma.disconnect();
}

seedData();
