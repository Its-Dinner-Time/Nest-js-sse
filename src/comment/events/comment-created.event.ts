import { CreatedComment } from '../comment.type';

export class CommentCreatedEvent {
  static readonly EVENT_NAME = 'comment.created';

  readonly comment: CreatedComment;

  constructor(comment: CreatedComment) {
    this.comment = comment;
  }
}
