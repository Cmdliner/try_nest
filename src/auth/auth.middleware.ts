import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private userService: UserService) { }

    use(req: Request, res: Response, next: NextFunction) {
        try {
            const [_, authToken] = req.headers.authorization?.split(" ")  || "";
        const user = this.userService.findOne(authToken);
        console.log({ user, authToken });
        if (user) {
            req.user = user;
            next();
        }
        throw new UnauthorizedException("Unauthorized");
        } catch (error) {
            console.error(error);
            throw new UnauthorizedException("Unauthorized");

        }
        
    }
}

