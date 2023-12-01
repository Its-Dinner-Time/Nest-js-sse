import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly notification = new Subject<string>();

  getNotifications() {
    return this.notification.asObservable();
  }

  pushNotification(note: string) {
    this.notification.next(note);
  }
}
