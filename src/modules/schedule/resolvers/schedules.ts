import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Schedule } from '../../../types/types.d';


const getSchedules: Resolver = async (_, { start, end }, { prisma, user }): Promise<Array<Schedule>> => {
  try {
    // TODO: Necessario criar logica para filtra melhor os eventos
    console.log(start, end);
    const getedSchedules = await prisma.schedule.findMany({
      where: {
        accountId: user?.accountId,
        // start: { lte: start },
        // end: { gte: end },
      },
      include: { doctor: true, patient: true, procedures: true },
    });

    const schedules = getedSchedules?.map((schedule) => ({
      id: schedule.id,
      title: schedule.title!,
      start: schedule.start!,
      end: schedule.end!,
      resources: {
        doctor: schedule.doctor!,
        patient: schedule.patient!,
        procedures: schedule.procedures!,
        sendEmail: schedule.sendEmail,
        comments: schedule.comments!,
      },
    }));

    return schedules;
  } catch (e) {
    throw new UserInputError('Falha ao buscar agendamentos');
  }
};

export default getSchedules;
