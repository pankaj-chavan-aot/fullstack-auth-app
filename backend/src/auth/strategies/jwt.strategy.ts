import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.jwt || null; // ✅ COOKIE मधून टोकन
        },
      ]),
      secretOrKey: 'your-secret-key', // ✅ AuthModule मधला key match करायला हवा
    });
  }
async validate(payload: any) {
  console.log('JWT payload:', payload); // 👈 Debug
  return {
    id: payload.id,
    email: payload.email,
    role: payload.role, //
  };
}
}