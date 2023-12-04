import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '@app/prisma';
import { PostCreatedEvent } from './events/post-created.event';
import { NotificationService } from '@app/notification';

@Injectable()
export class PostService {
  static readonly SSE_POST_SUB = 'subscriber';

  constructor(
    private readonly prismaService: PrismaService, //
    private readonly eventEmitter: EventEmitter2,
    private readonly notificationService: NotificationService,
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

  async sendNotifications(sseEndpoint: string, req: Record<string, any>) {
    // 구독자 id
    // - 실제 구현할때는 sse를 요청한 사용자의 userid로 구현
    // - 현재는 로그인 기능이 없기에 하드코딩
    const userId = 1;

    // 구독자 id로 보내진 알림 전송
    return this.notificationService.getNotifications(
      `${sseEndpoint}-${userId}`,
    );
  }
}
