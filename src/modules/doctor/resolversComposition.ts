import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.doctor': [authenticated, authorizated('GET_DOCTOR')],
  'Query.doctors': [authenticated, authorizated('GET_DOCTORS')],
  'Mutation.createDoctor': [authenticated, authorizated('CREATE_DOCTOR')],
  'Mutation.updateDoctor': [authenticated, authorizated('UPDATE_DOCTOR')],
};

export default resolversComposition;
