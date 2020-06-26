import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getDoctor': [authenticated, authorizated('GET_DOCTOR')],
  'Query.getDoctors': [authenticated, authorizated('GET_DOCTORS')],
  'Mutation.createDoctor': [authenticated, authorizated('CREATE_DOCTOR')],
  'Mutation.updateDoctor': [authenticated, authorizated('UPDATE_DOCTOR')],
};

export default resolversComposition;
