import * as jwt from 'jsonwebtoken';
import { User } from '../../types/graphql-utils';

const decodeJWT = async (token: string): Promise<User> => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET as string);
    const { id, accountId, roles } = decoded as User;
    return {
      id, accountId, roles,
    };
  } catch (e) {
    return e;
  }
};

export default decodeJWT;
