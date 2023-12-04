import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
import { PostCreateListener } from './listeners/post-create.listener';
import { PostCreatedEvent } from './events/post-created.event';

@Injectable()
export class PostService {
  constructor(
    private readonly prismaService: PrismaService, //
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const created = await this.prismaService.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        author: { connect: { id: 2 } },
      },
    });

    this.eventEmitter.emit(
      PostCreatedEvent.EVENT_NAME,
      new PostCreatedEvent(created),
    );

    return { id: created.id };
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
