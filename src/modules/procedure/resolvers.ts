import { ResolverMap } from '../../types/graphql-utils';


const Resolver: ResolverMap = {
  Query: {
    getProcedureTable: (id: string) => { console.log(id); },
    getProcedureTables: () => { console.log('getproceduretables'); },
    getProcedures: (tableId?: string) => { console.log(tableId); },
    getProcedure: (id: string) => { console.log(id); },
  },
  Mutation: {
    createProcedureTable: () => {},
    updateProcedureTable: () => {},
    createProcedure: () => {},
    updateProcedure: () => {},
  },
};

export default Resolver;
