import authenticated from '../../utils/authenticated';

const resolversComposition = {
  'Mutation.createDoctor': [authenticated],
  'Query.getDoctors': [authenticated],
};

export default resolversComposition;
