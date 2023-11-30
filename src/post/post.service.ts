import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private postId = 0;

  createPost(title: string, content: string): Post {
    const post = new Post(this.postId++, title, content);
    this.posts.push(post);

    console.log(this.posts);

    return post;
  }

  getAllPosts(): Post[] {
    return this.posts;
  }
}
