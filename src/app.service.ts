import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { PostService } from './post/post.service';

@Injectable()
export class AppService {
  private notification = new Subject<string>();

  constructor(private postService: PostService) {}

  getNotifications() {
    return this.notification.asObservable();
  }

  createPostAndNotify(title: string, content: string) {
    const post = this.postService.createPost(title, content);
    this.notification.next(`새 글이 작성되었습니다: ${post.title}`);
  }
}
