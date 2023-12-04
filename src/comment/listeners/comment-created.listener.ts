import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from '@app/prisma';
import { NotificationService } from '@app/notification';
import { CommentCreatedEvent } from '../events/comment-created.event';
import { CommentService } from '../comment.service';

@Injectable()
export class CommentCreatedListener {
  constructor(
    private readonly prismaService: PrismaService, //
    private readonly notificationService: NotificationService,
  ) {}

  private readonly logger = new Logger();

  // 게시글 등록자에게 알림 전송
  @OnEvent(CommentCreatedEvent.EVENT_NAME, { async: true })
  async sendNotificationToPostAuthor(event: CommentCreatedEvent) {
    this.logger.log(
      `[Event Emitter] - ${CommentCreatedEvent.EVENT_NAME} / ${this.sendNotificationToPostAuthor.name}`,
    );

    // comment의 postId로 게시글 작성자 가져오기
    const { authorId } = await this.prismaService.post.findUnique({
      select: { authorId: true },
      where: { id: event.comment.postId },
    });

    // 알림 보내기
    this.notificationService.pushNotification(
      `${CommentService.SSE_POST_AUTHOR}-${authorId}`,
      JSON.stringify(event.comment),
    );
  }
}
