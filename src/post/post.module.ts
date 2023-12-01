import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostCreateListener } from './listeners/post-create.listener';

@Module({
  controllers: [PostController],
  providers: [PostService, PostCreateListener],
})
export class PostModule {}
