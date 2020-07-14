import { UserInputError } from 'apollo-server';
import { ScheduleInput } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';
import { Schedule } from '../../../types/types';

const updateSchedule: Resolver = async (_, { id, input }: { id: string, input: ScheduleInput }, { prisma, user }): Promise<Schedule> => {
  try {
    const schedule = await prisma.schedule.findOne({
      where: {
        id,
      },
      include: { procedures: true },
    });

    if (!schedule || schedule.accountId !== user?.accountId) throw new UserInputError('Agendamento não encontrado ou token invalido');


    const disconnectProcedures = schedule.procedures
      .filter((proc) => !input.resources.procedures?.some((newProc) => proc.id === newProc!.id))
      .map((procedure) => ({ id: procedure.id }));
    const connectProcedures = input?.resources.procedures?.map((procedure: any) => ({ id: procedure.id }));


    const createdSchedule = await prisma.schedule.update({
      where: {
        id,
      },
      data: {
        title: input.title,
        start: input.start,
        end: input.end,
        comments: input.resources.comments,
        doctor: { connect: { id: input.resources.doctor.id } },
        patient: { connect: { id: input.resources.patient.id } },
        procedures: {
          disconnect: disconnectProcedures?.length > 0 ? disconnectProcedures : undefined,
          connect: connectProcedures?.length! > 0 ? connectProcedures : undefined,
        },
        account: { connect: { id: user?.accountId } },
      },
      include: { doctor: true, patient: true, procedures: true },
    });

    // Transforma o dado para o front receber tudo pronto
    const updatedSchedule: Schedule = {
      id: createdSchedule.id,
      title: createdSchedule.title,
      start: createdSchedule.start,
      end: createdSchedule.end,
      resources: {
        doctor: createdSchedule.doctor,
        patient: createdSchedule.patient,
        procedures: createdSchedule.procedures,
        comments: createdSchedule.comments,
      },
    };

    return updatedSchedule;
  } catch (e) {
    throw new UserInputError('Falha ao atualizar agendamento');
  }
};

export default updateSchedule;
