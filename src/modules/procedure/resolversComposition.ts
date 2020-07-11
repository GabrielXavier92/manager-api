import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.procedureTable': [authenticated, authorizated('GET_PROCEDURE_TABLE')],
  'Query.procedureTables': [authenticated, authorizated('GET_PROCEDURE_TABLES')],
  'Mutation.createProcedureTable': [authenticated, authorizated('CREATE_PROCEDURE_TABLE')],
  'Mutation.updateProcedureTable': [authenticated, authorizated('UPDATE_PROCEDURE_TABLE')],

  'Query.procedure': [authenticated, authorizated('GET_PROCEDURE')],
  'Query.procedures': [authenticated, authorizated('GET_PROCEDURES')],
  'Mutation.createProcedure': [authenticated, authorizated('CREATE_PROCEDURE')],
  'Mutation.updateProcedure': [authenticated, authorizated('UPDATE_PROCEDURE')],

  'Query.specialty': [authenticated, authorizated('GET_SPECIALTY')],
  'Query.specialties': [authenticated, authorizated('GET_SPECIALTIES')],
  'Mutation.createSpecialty': [authenticated, authorizated('CREATE_SPECIALTY')],
  'Mutation.updateSpecialty': [authenticated, authorizated('UPDATE_SPECIALTY')],

};

export default resolversComposition;
