// import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

// export class SignupDto {
//   @IsEmail()
//   email: string;

//   @IsString()
//   password: string;

//   @IsOptional()
//   @IsNumber()
//   roleId?: number; // superadmin=1, admin=2, user=3
// }
import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SignupDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongpassword123' })
  @IsString()
  password: string;

  @ApiPropertyOptional({
    example: 3,
    description: '1=SuperAdmin, 2=Admin, 3=User (default)',
  })
  @IsOptional()
  @IsNumber()
  roleId?: number;
}
