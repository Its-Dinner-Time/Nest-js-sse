import { CreatedPost } from '../post.type';

export class PostCreatedEvent {
  static readonly EVENT_NAME = 'post.created';

  readonly post: CreatedPost;

  constructor(post: CreatedPost) {
    this.post = post;
  }
}
