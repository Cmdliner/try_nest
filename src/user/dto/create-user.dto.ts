import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export default class CreateUserDto {

    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    readonly email: string

    // @IsStrongPassword({minLength: 6, minSymbols: 3})
    readonly password: string;
}