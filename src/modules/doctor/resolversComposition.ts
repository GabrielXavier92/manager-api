import { authenticated } from '../../utils';

const resolversComposition = {
  'Mutation.createDoctor': [authenticated],
  'Mutation.updateDoctor': [authenticated],
  'Query.getDoctors': [authenticated],
  'Query.getDoctor': [authenticated],
};

export default resolversComposition;
