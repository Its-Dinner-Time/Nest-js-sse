import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/prisma';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { UserSubscriptionModule } from './user-subscription/user-subscription.module';

@Module({
  imports: [
    PrismaModule,
    CommentModule,
    PostModule,
    UserModule,
    UserSubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
