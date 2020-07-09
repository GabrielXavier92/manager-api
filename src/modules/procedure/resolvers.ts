import { ResolverMap } from '../../types/graphql-utils';

import getProcedureTable from './resolver/getProcedureTable';
import getProcedureTables from './resolver/getProcedureTables';
import createProcedureTable from './resolver/createProcedureTable';
import updateProcedureTable from './resolver/updateProcedureTable';

import getProcedure from './resolver/getProcedure';
import getProcedures from './resolver/getProcedures';
import createProcedure from './resolver/createProcedure';
import updateProcedure from './resolver/updateprocedure';

import getSpecialty from './resolver/getSpecialty';
import getSpecialties from './resolver/getSpecialties';
import createSpecialty from './resolver/createSpecialty';
import updateSpecialty from './resolver/updateSpecialty';

const Resolver: ResolverMap = {
  Query: {
    // Tabela
    getProcedureTable,
    getProcedureTables,
    // Procedimentos
    getProcedures,
    getProcedure,
    // Especialidades
    getSpecialty,
    getSpecialties,
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
