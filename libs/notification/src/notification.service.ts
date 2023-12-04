import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private notifications: Record<string, Subject<string>> = {};

  getNotifications(key: string) {
    if (!this.notifications[key]) {
      this.notifications[key] = new Subject<string>();
    }

    return this.notifications[key].asObservable();
  }

  pushNotification(key: string, note: string) {
    if (!this.notifications[key]) {
      this.notifications[key] = new Subject<string>();
    }

    this.notifications[key].next(note);
  }
}
