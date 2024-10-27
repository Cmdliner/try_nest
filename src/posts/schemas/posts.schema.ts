import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true, ref: "User" })
    owner: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: Date.now })
    createdAt: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);