import authenticated from '../../utils/authenticated';

const resolversComposition = {
  'Mutation.createDoctor': [authenticated],
};

export default resolversComposition;
