import { Doctor } from '../../types/types.d';
import { ResolverMap } from '../../types/graphql-utils';

import createGuide from './resolvers/createGuide';
import getGuides from './resolvers/getGuides';
import getGuide from './resolvers/getGuide';
import updateGuide from './resolvers/updateGuide';

const Resolver: ResolverMap = {
  Query: {
    getGuide,
    getGuides,
  },
  Mutation: {
    createGuide,
    updateGuide,
  },
  Guide: {
    doctor: async (parent, _, { prisma }) => {
      const doctor = await prisma.doctor.findOne({
        where: { id: parent.doctorId },
      });
      return doctor;
    },
    patient: async (parent, _, { prisma }) => {
      const patient = await prisma.patient.findOne({
        where: { id: parent.patientId },
      });
      return patient;
    },
  },
  Doctor: {
    guides: async (parent: Doctor, _, { prisma }) => {
      const guides = await prisma.guide.findMany({
        where: { doctorId: parent.id },
      });
      return guides;
    },
  },
  Patient: {
    guides: async (parent: Doctor, _, { prisma }) => {
      const guides = await prisma.guide.findMany({
        where: { doctorId: parent.id },
      });
      return guides;
    },
  },
};

export default Resolver;
