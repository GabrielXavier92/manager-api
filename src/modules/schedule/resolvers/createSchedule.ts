import { UserInputError } from 'apollo-server';
import { ScheduleInput } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';
import { Schedule } from '../../../types/types';

const createSchedule: Resolver = async (_, { input }: { input: ScheduleInput}, { prisma, user }): Promise<Schedule> => {
  try {
    let procedures;

    if (input?.resources.procedures) {
      procedures = input?.resources.procedures?.map((procedure: any) => ({ id: procedure.id }));
    }

    const createdSchedule = await prisma.schedule.create({
      data: {
        title: input.title,
        start: input.start,
        end: input.end,
        comments: input.resources.comments,
        doctor: { connect: { id: input.resources.doctor.id } },
        patient: { connect: { id: input.resources.patient.id } },
        procedures: { connect: procedures },
        sendEmail: input.resources.sendEmail,
        account: { connect: { id: user?.accountId } },
      },
      include: { doctor: true, patient: true, procedures: true },
    });

    // Transforma o dado para o front receber tudo pronto
    const schedule: Schedule = {
      id: createdSchedule.id,
      title: createdSchedule.title,
      start: createdSchedule.start,
      end: createdSchedule.end,
      resources: {
        doctor: createdSchedule.doctor,
        patient: createdSchedule.patient,
        procedures: createdSchedule.procedures,
        sendEmail: createdSchedule.sendEmail,
        comments: createdSchedule.comments,
      },
    };

    return schedule;
  } catch (e) {
    throw new UserInputError('Falha ao criar agendamento');
  }
};

export default createSchedule;
