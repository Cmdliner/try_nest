import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comments.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
