import { authenticated } from '../../utils';

const resolversComposition = {
  'Query.me': [authenticated],
};

export default resolversComposition;
