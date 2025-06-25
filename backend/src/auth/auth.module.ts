import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy'; // ✅ IMPORT

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // ✅ same key as strategy
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // ✅ ADD HERE
  exports: [AuthService],
})
export class AuthModule {}
