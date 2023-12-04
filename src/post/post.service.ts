import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '@app/prisma';
import { PostCreatedEvent } from './events/post-created.event';

@Injectable()
export class PostService {
  static readonly SSE_POST_SUB = 'subscriber';

  constructor(
    private readonly prismaService: PrismaService, //
    private readonly eventEmitter: EventEmitter2,
  ) {}

  //  게시글 생성
  //  - userB가 게시글을 작성
  async create(createPostDto: CreatePostDto) {
    const created = await this.prismaService.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        author: { connect: { id: 2 } },
      },
    });

    this.eventEmitter.emit(
      PostCreatedEvent.EVENT_NAME,
      new PostCreatedEvent(created),
    );

    return { id: created.id };
  }
}
