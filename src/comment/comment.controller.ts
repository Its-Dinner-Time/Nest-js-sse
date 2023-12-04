import { Controller, Post, Body, Req, Sse } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { NotificationService } from '@app/notification';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Sse(CommentService.SSE_POST_AUTHOR)
  sseCommentPostAuthor(@Req() req: Record<string, any>) {
    return this.notificationService.sendNotificationsToUser(
      CommentService.SSE_POST_AUTHOR,
      2,
    );
  }
}
