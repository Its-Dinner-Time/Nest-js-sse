import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PostCreatedEvent } from '../events/post-created.event';
import { PrismaService } from '@app/prisma';
import { NotificationService } from '@app/notification';
import { PostService } from '../post.service';

@Injectable()
export class PostCreateListener {
  constructor(
    private readonly prismaService: PrismaService, //
    private readonly notificationService: NotificationService,
  ) {}

  private readonly logger = new Logger();

  // 게시글 생성 시 삭제일시 추가
  @OnEvent(PostCreatedEvent.EVENT_NAME, { async: true })
  async setToBeDeleted(event: PostCreatedEvent) {
    this.logger.log(
      `[Event Emitter] - ${PostCreatedEvent.EVENT_NAME} / ${this.setToBeDeleted.name}`,
    );

    await this.prismaService.post.update({
      data: { toBeDeletedAt: new Date(new Date().getTime() + 1000 * 60 * 60) },
      where: { id: event.post.id },
    });
  }

  // 게시글 생성시 알림 보내기
  @OnEvent(PostCreatedEvent.EVENT_NAME, { async: true })
  async sendNotification(event: PostCreatedEvent) {
    this.logger.log(
      `[Event Emitter] - ${PostCreatedEvent.EVENT_NAME} / ${this.sendNotification.name}`,
    );

    this.notificationService.pushNotification(
      PostService.SSE_POST_SUB,
      event.post.title,
    );
  }
}
