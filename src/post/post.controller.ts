import { Controller, Post, Body, Sse } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { NotificationService } from '@app/notification';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  /**
   * ** 중요 **
   * sse가 제대로 동작하기 위해선 return type을 Observable<string>이 되도록 해야 한다!!
   *
   * @returns
   */
  @Sse(PostService.SSE_POST_SUB)
  ssePostSub() {
    return this.notificationService.getNotifications(PostService.SSE_POST_SUB);
  }
}
