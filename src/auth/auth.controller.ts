import { Body, Controller, Post } from '@nestjs/common';
import CreateUserDto from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post("/register")
    async register(@Body() body: CreateUserDto) {
        const user = await this.userService.create(body);
        return 
    }
}
