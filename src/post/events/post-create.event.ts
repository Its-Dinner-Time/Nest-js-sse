import { Prisma } from '@prisma/client';

export class PostCreateEvent implements Prisma.PostCreateInput {
  title: string;
  content?: string;
  author: Prisma.UserCreateNestedOneWithoutPostsInput;
}
