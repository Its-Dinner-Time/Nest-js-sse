import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { PrismaService } from '@app/prisma';

@Injectable()
export class PostService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly postRepository: PostRepository,
  ) {}

  async createPost(title: string, content: string) {
    const [post] = await this.prismaService.$transaction([
      this.postRepository.create({
        title,
        content,
        author: { connect: { id: 1 } },
      }),
    ]);

    return post;
  }

  getAllPosts() {
    return this.prismaService.post.findMany();
  }
}
