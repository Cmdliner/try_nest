import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import CreateUserDto from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { LoginUser } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post("/register")
    async register(@Body() body: CreateUserDto) {
        const user = await this.userService.create(body);
        return user
    }

    @HttpCode(200)
    @Post("/login")
    async login(@Body() loginData : LoginUser) {
        const user = await this.userService.findByEmail(loginData.email);
        if(user.password == loginData.password) {
            return "Sign in successful";
        }
        return "Error signing in  user";
    }
}
