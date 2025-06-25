import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsNumber()
  roleId?: number; // superadmin=1, admin=2, user=3
}
