import 'dotenv/config';

import { PrismaClient } from "@prisma/client";
import roles from '../src/constants/roles';

const prisma = new PrismaClient();


async function seedData() {

  await prisma.connect();

     const createdRoles = roles.map((role) => {
      return prisma.roles.create({
        data: role
      })
     })
  
  await Promise.all(createdRoles)
  
  await prisma.disconnect();
  
}

seedData();
