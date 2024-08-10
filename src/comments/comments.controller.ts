import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comments.schema';

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService) {}

    @Post('create')
    create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
        return this.commentsService.create(createCommentDto);
    }

    @Get('post/:postID')
    findByPost(@Param('postID') postID: string): Promise<Comment[]> {
        return this.commentsService.findByPost(postID);
    }

    @Delete()
    remove(@Param('commentID') commentID: string): Promise<Comment> {
        return this.commentsService.remove(commentID);
    }
}
