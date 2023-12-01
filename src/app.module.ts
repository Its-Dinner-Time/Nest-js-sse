import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { UserSubscriptionModule } from './user-subscription/user-subscription.module';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [
    PrismaModule,
    PostModule,
    UserModule,
    CommentModule,
    UserSubscriptionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
