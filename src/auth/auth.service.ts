import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './DTO/signup.dto';

import * as bcrypt from 'bcryptjs';
import { LoginDTO } from './DTO/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){

    }

    async signUp(signUpDto: SignUpDTO): Promise<{token: string}>{
        const {username, password} = signUpDto;

        // hashing the password to store in database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            username,
            password: hashedPassword,
        });

        const token = this.jwtService.sign({ id: user._id });
        return { token };
    }

    async login(loginDto: LoginDTO): Promise<{token: string}>{
        const {username, password} = loginDto;

        const user=await this.userModel.findOne({username})
        if(!user){
            throw new UnauthorizedException("Invalid Username");
        }

        // decrypting hashed password 
        const pass=await bcrypt.compare(password, user.password);
        if(!pass){
            throw new UnauthorizedException("Invalid Password");
        }

        // if both correct return token
        const token = this.jwtService.sign({ id: user._id });
        return { token };
    }
}
