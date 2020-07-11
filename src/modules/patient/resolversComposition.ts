import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.patient': [authenticated, authorizated('GET_PATIENT')],
  'Query.patients': [authenticated, authorizated('GET_PATIENTS')],
  'Mutation.createPatient': [authenticated, authorizated('CREATE_PATIENT')],
  'Mutation.updatePatient': [authenticated, authorizated('UPDATE_PATIENT')],
};

export default resolversComposition;
