import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getSpecialty': [authenticated, authorizated('GET_SPECIALTY')],
  'Query.getSpecialties': [authenticated, authorizated('GET_SPECIALTIES')],
  'Mutation.createSpecialty': [authenticated, authorizated('CREATE_SPECIALTY')],
  'Mutation.updateSpecialty': [authenticated, authorizated('UPDATE_SPECIALTY')],
};

export default resolversComposition;
