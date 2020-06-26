import 'dotenv/config';

import { PrismaClient } from "@prisma/client";
import roles from '../src/constants/roles'

const prisma = new PrismaClient();


async function seedData() {
  await prisma.connect();

    roles.forEach(async role => {
      await prisma.roles.create({
        data: role
      })
    })
  
    await prisma.disconnect();
}

seedData();
