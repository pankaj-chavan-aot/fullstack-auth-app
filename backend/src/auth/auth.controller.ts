
import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private jwt: JwtService) {}

  @Post('signup')
  async signup(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.signup(body.email, body.password);
    const token = this.jwt.sign({ id: user.id });
    res.cookie('jwt', token, { httpOnly: true });
    return user;
  }

  @Post('signin')
  async signin(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token } = await this.authService.signin(body.email, body.password);
    res.cookie('jwt', token, { httpOnly: true });
    return { message: 'Signed in' };
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logged out' };
  }
}
