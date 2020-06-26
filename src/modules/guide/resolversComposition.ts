import { authenticated, authorizated } from '../../utils';

const resolversComposition = {
  'Query.getGuide': [authenticated, authorizated('GET_GUIDE')],
  'Query.getGuides': [authenticated, authorizated('GET_GUIDES')],
  'Mutation.createGuide': [authenticated, authorizated('CREATE_GUIDE')],
  'Mutation.updateGuide': [authenticated, authorizated('UPDATE_GUIDE')],
};

export default resolversComposition;
