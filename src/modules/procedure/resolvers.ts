import { ResolverMap } from '../../types/graphql-utils';

import procedureTable from './resolver/procedureTable';
import procedureTables from './resolver/procedureTables';
import createProcedureTable from './resolver/createProcedureTable';
import updateProcedureTable from './resolver/updateProcedureTable';

import procedure from './resolver/procedure';
import procedures from './resolver/procedures';
import createProcedure from './resolver/createProcedure';
import updateProcedure from './resolver/updateprocedure';

import specialty from './resolver/specialty';
import specialties from './resolver/specialties';
import createSpecialty from './resolver/createSpecialty';
import updateSpecialty from './resolver/updateSpecialty';

const Resolver: ResolverMap = {
  Query: {
    // Tabela
    procedureTable,
    procedureTables,
    // Procedimentos
    procedures,
    procedure,
    // Especialidades
    specialty,
    specialties,
  },
  Mutation: {
    // Tabela
    createProcedureTable,
    updateProcedureTable,
    // Procedimento
    createProcedure,
    updateProcedure,
    // Especialidades
    createSpecialty,
    updateSpecialty,
  },
};

export default Resolver;
