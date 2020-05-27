import authenticated from '../../utils/authenticated';

const resolversComposition = {
  'Mutation.createGuide': [authenticated],
  'Mutation.updateGuide': [authenticated],
  'Query.getGuide': [authenticated],
  'Query.getGuides': [authenticated],
};

export default resolversComposition;
