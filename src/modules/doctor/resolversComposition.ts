import authenticated from '../../utils/authenticated';

const resolversComposition = {
  'Mutation.createDoctor': [authenticated],
  'Query.getDoctors': [authenticated],
  'Query.getDoctor': [authenticated],
};

export default resolversComposition;
