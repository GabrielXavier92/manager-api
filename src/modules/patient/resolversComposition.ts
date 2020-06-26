import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getPatient': [authenticated, authorizated('GET_PATIENT')],
  'Query.getPatients': [authenticated, authorizated('GET_PATIENTS')],
  'Mutation.createPatient': [authenticated, authorizated('CREATE_PATIENT')],
  'Mutation.updatePatient': [authenticated, authorizated('UPDATE_PATIENT')],
};

export default resolversComposition;
