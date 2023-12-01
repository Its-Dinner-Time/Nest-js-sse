import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getAllPosts();
  }

  @Post()
  createPost(@Body('title') title: string, @Body('content') content: string) {
    return this.postService.createPost(title, content);
  }
}
