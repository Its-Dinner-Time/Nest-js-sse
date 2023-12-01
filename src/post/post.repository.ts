import { Injectable } from '@nestjs/common';
import { Post, Prisma, PrismaPromise } from '@prisma/client';
import { PrismaService } from '@app/prisma';

@Injectable()
export class PostRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.PostCreateInput): PrismaPromise<Post> {
    return this.prismaService.post.create({ data });
  }

  async update(id: number, data: Prisma.PostUpdateInput) {
    return this.prismaService.post.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prismaService.post.delete({ where: { id } });
  }

  async findOne(id: number) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prismaService.post.findMany();
  }
}
