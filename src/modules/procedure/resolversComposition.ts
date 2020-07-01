import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getProcedureTable': [authenticated, authorizated('GET_PROCEDURE_TABLE')],
  // 'Query.getSpecialties': [authenticated, authorizated('GET_SPECIALTIES')],
  // 'Mutation.createSpecialty': [authenticated, authorizated('CREATE_SPECIALTY')],
  // 'Mutation.updateSpecialty': [authenticated, authorizated('UPDATE_SPECIALTY')],
};

export default resolversComposition;
