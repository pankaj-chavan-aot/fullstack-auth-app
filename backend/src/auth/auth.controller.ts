
// import {
//   Controller,
//   Post,
//   Body,
//   Res,
//   Get,
//   Req,
//   UseGuards,
// } from '@nestjs/common';
// import { SignupDto } from './dto/signup.dto';
// import { AuthService } from './auth.service';
// import { Response, Request } from 'express';
// import { JwtService } from '@nestjs/jwt';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService, private jwt: JwtService) {}

//   @Post('signup')
//   async signup(
//     @Body() body: { email: string; password: string },
//     @Res({ passthrough: true }) res: Response,
//   ) {
//     const user = await this.authService.signup(body); 
//    const token = this.jwt.sign({ id: user.user.id });
//     res.cookie('Authentication', token, { httpOnly: true });
//     return user;
//   }

//   @Post('signin')
//   async signin(
//     @Body() body: { email: string; password: string },
//     @Res({ passthrough: true }) res: Response,
//   ) {
//     const { token } = await this.authService.signin(body.email, body.password);
//     res.cookie('jwt', token, { httpOnly: true });
//     return { message: 'Signed in',token  };
//   }

//   @Post('logout')
//   logout(@Res({ passthrough: true }) res: Response) {
//     res.clearCookie('jwt');
//     return { message: 'Logged out' };
//   }
// }

import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from '../common/public.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiCookieAuth } from '@nestjs/swagger';

@ApiTags('Auth') // 👉 Swagger tab name
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private jwt: JwtService) {}
  @Public()
  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiBody({
    schema: {
      example: {
        email: 'user@example.com',
        password: 'strongpassword123',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  async signup(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.signup(body);
    const token = this.jwt.sign({ id: user.user.id });
    res.cookie('Authentication', token, { httpOnly: true });
    return user;
  }
  @Public()
  @Post('signin')
  @ApiOperation({ summary: 'Sign in user and return JWT cookie' })
  @ApiBody({
    schema: {
      example: {
        email: 'user@example.com',
        password: 'strongpassword123',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'User signed in successfully' })
  async signin(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('Signin request body:', body);
    const { token } = await this.authService.signin(body.email, body.password);
    res.cookie('jwt', token, { httpOnly: true });
    return { message: 'Signed in', token };
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logs out the user by clearing cookie' })
  @ApiResponse({ status: 200, description: 'User logged out successfully' })
  @ApiCookieAuth('jwt') // 👈 indicates it needs JWT in cookie
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logged out' };
  }
}
