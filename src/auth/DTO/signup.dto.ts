import { IsNotEmpty, Matches, MinLength } from "class-validator";

export class SignUpDTO{
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    @MinLength(6)
    @Matches(/^(?:(?=.*\d)|(?=.*\W+))(?!.*[\s\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
        message: "Password must contain atleast one lower-case and one upper-case english alphabet. Password must contain atleast one number or one special character."
    })
    password: string;
}