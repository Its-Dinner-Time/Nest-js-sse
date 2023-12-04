import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export type CreatedPost = Prisma.PostGetPayload<
  Prisma.PostDefaultArgs<DefaultArgs>
>;
