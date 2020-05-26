import authenticated from '../../utils/authenticated';

const resolversComposition = {
  'Query.me': [authenticated],
};

export default resolversComposition;
