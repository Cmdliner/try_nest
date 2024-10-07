import {
    ForbiddenException,
    Injectable,
    NestMiddleware,
    UnauthorizedException,
    UseFilters,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { UnauthorizedExceptionFilter } from 'src/common/http-exception.filter';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private userService: UserService) { }
    
    @UseFilters(new UnauthorizedExceptionFilter)
    async use(req: Request, _res: Response, next: NextFunction) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                throw new UnauthorizedException('Auth header required!');
            }
            const [_, userId] = authHeader.split(' ');
            if (!isValidObjectId(userId))
                throw new ForbiddenException('Unauthorized!');

            const user = await this.userService.findOne(userId);
            req['user'] = user;
            next();
        } catch (error) {
            // console.error(error);
            throw new UnauthorizedException('Unauthorized');
        }
        return 'Error occured';
    }
}
