import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './DTO/signup.dto';
import { LoginDTO } from './DTO/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){

    }

    @Post('/login')
    Login(@Body() loginDto: LoginDTO): Promise<{token: string}>{
        return this.authService.login(loginDto);
    }




    // ✨✨✨   UNCOMMENT TO ADD NEW USERS USING BACKEND-API  ✨✨✨

    // Allowing access to aset of users only.
    // @Post('/signup')
    // signUp(@Body() signupDto: SignUpDTO): Promise<{token: string}>{
    //     return this.authService.signUp(signupDto);
    // }
}
