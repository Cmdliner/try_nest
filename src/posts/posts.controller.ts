import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostModel } from './schemas/posts.schema';
import { Types } from 'mongoose';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post('create')
    create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
        return this.postsService.create(createPostDto);
    }

    @Get()
    findAll(): Promise<PostModel[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: Types.ObjectId): Promise<PostModel> {
        return this.postsService.findOne(id);
    }

    @Put('edit')
    update(id: Types.ObjectId, @Body() updatePostDto: CreatePostDto): Promise<PostModel> {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete()
    remove(id: Types.ObjectId): Promise<PostModel> {
        return this.postsService.remove(id)
    }
}
