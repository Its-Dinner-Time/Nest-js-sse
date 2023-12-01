import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PostCreateEvent } from './events/post-create.event';

@Injectable()
export class PostService {
  constructor(private eventEmitter: EventEmitter2) {}

  create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    this.eventEmitter.emit('post.create', new PostCreateEvent());
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
