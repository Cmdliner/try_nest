import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './schemas/comments.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) { }

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        return this.commentModel.create(createCommentDto);
    }

    async findByPost(id: string): Promise<Comment[]> {
        return this.commentModel.find({ post: id }).exec();
    }

    async remove(id: string): Promise<Comment> { 
        return this.commentModel.findByIdAndDelete(id).exec();
    }

}
