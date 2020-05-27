import { PrismaSelect } from '@prisma-tools/select';

const addSelect = (next: any) => (root: any, args: any, context: any, info: any) => {
  const result = new PrismaSelect(info).value;
  let newArgs;
  if (Object.keys(result.select).length > 0) {
    newArgs = {
      ...args,
      select: result,
    };
  }

  return next(root, newArgs, context, info);
};

export default addSelect;
