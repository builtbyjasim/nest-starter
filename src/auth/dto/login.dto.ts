import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsPhoneNumber('IN')
  phone: string;
}
