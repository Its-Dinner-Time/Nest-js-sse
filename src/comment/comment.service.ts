import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from '@app/prisma';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CommentCreatedEvent } from './events/comment-created.event';

@Injectable()
export class CommentService {
  static readonly SSE_POST_AUTHOR = 'post-author';

  constructor(
    private readonly prismaService: PrismaService, //
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    // userB의 게시글 하나 가져오기
    // - 실제 구현시에는 dto에 게시글 id를 포함시킨다.
    const { id: postId } = await this.prismaService.post.findFirst({
      select: { id: true },
      where: { authorId: 2 },
    });

    // userA가 게시글에 댓글 달기
    const created = await this.prismaService.comment.create({
      data: { content: createCommentDto.content, postId, writerId: 1 },
    });

    // 이벤트 발생 처리
    this.eventEmitter.emit(
      CommentCreatedEvent.EVENT_NAME, //
      new CommentCreatedEvent(created),
    );

    return { id: created.id };
  }
}
