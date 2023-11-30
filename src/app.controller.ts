import { Body, Controller, Get, Post, Res, Sse } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() response: Response) {
    response
      .type('text/html')
      .send(readFileSync(join(__dirname, 'index.html')).toString());
  }

  @Post('post')
  createPost(@Body('title') title: string, @Body('content') content: string) {
    this.appService.createPostAndNotify(title, content);
    return { message: 'Post created successfully' };
  }

  @Sse('notifications')
  sse() {
    return this.appService.getNotifications();
  }
}
