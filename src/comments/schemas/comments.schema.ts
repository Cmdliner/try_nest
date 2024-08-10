import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Post } from "src/posts/schemas/posts.schema";

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

    @Prop({ type: Types.ObjectId, required: true, ref: 'Post' })
    post: Post;

    @Prop({ required: true })
    content: string;

    @Prop({ default: Date.now })
    createdAt: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment);