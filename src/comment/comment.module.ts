import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentCreatedListener } from './listeners/comment-created.listener';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentCreatedListener],
})
export class CommentModule {}
