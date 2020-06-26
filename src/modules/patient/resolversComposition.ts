import { authenticated } from '../../utils';

const resolversComposition = {
  'Mutation.createPatient': [authenticated],
  'Mutation.updatePatient': [authenticated],
  'Query.getPatients': [authenticated],
  'Query.getPatient': [authenticated],
};

export default resolversComposition;
