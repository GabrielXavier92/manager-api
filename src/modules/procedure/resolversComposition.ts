import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getProcedureTable': [authenticated, authorizated('GET_PROCEDURE_TABLE')],
  'Query.getProcedureTables': [authenticated, authorizated('GET_PROCEDURE_TABLES')],
  'Mutation.createProcedureTable': [authenticated, authorizated('CREATE_PROCEDURE_TABLE')],
  'Mutation.updateProcedureTable': [authenticated, authorizated('UPDATE_PROCEDURE_TABLE')],

  'Query.getProcedure': [authenticated, authorizated('GET_PROCEDURE')],
  'Query.getProcedures': [authenticated, authorizated('GET_PROCEDURES')],
  'Mutation.createProcedure': [authenticated, authorizated('CREATE_PROCEDURE')],
  'Mutation.updateProcedure': [authenticated, authorizated('UPDATE_PROCEDURE')],

  'Query.getSpecialty': [authenticated, authorizated('GET_SPECIALTY')],
  'Query.getSpecialties': [authenticated, authorizated('GET_SPECIALTIES')],
  'Mutation.createSpecialty': [authenticated, authorizated('CREATE_SPECIALTY')],
  'Mutation.updateSpecialty': [authenticated, authorizated('UPDATE_SPECIALTY')],

};

export default resolversComposition;
