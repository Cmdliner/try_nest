import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from './auth.middleware';
import { PostsController } from 'src/posts/posts.controller';

@Module({
  imports: [UserModule],
  providers: [],
  controllers: [AuthController],
  exports: []
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(PostsController);
}
}
