import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { isValidObjectId, Types } from "mongoose";

export class ParseObjectIdPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        if(isValidObjectId(value)) {
            return new Types.ObjectId(value);
        }
        throw new BadRequestException("Invalid id");
    }   
}