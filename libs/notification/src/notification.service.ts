import { BadRequestException, Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private notifications: Record<string, Subject<any>>;

  getNotifications(key: string) {
    const notification = this.notifications[key];

    return notification && notification.asObservable();
  }

  pushNotification(key: string, note: any) {
    const notification = this.notifications[key];

    if (notification) {
      this.notifications[key] = new Subject<any>();
    }

    notification.next(note);
  }
}
