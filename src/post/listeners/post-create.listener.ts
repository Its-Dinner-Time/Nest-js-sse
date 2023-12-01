import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PostCreateEvent } from '../events/post-create.event';

@Injectable()
export class PostCreateListener {
  @OnEvent('post.create')
  handlePostCreatedEvent(event: PostCreateEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
