import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export type CreatedComment = Prisma.CommentGetPayload<
  Prisma.CommentDefaultArgs<DefaultArgs>
>;
