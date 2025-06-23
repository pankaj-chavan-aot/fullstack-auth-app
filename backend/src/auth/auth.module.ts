

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; 
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    JwtModule.register({ secret: 'your-secret-key' }),
    UsersModule,
  ],
  controllers: [AuthController], 
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
