import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/posts.schema';
import { Model, Types } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

    async create(createPostDto: CreatePostDto) {
        return this.postModel.create(createPostDto);
    }

    async findAll(): Promise<Post[]> {
        return this.postModel.find().exec();
    }

    async findOne(id: Types.ObjectId) {
        return this.postModel.findById(id).exec();
    }

    async update(id: Types.ObjectId, updatePostDto: CreatePostDto) {
        return this.postModel.findByIdAndUpdate(id, updatePostDto, {new: true}).exec()
    }

    async remove(id: Types.ObjectId) {
        return this.postModel.findByIdAndDelete(id).exec();
    }
}
