
// import { NestFactory, Reflector } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

// import { RolesGuard } from './common/roles.guard';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(cookieParser());

//   app.enableCors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   });

//   const reflector = app.get(Reflector);
//   app.useGlobalGuards(new JwtAuthGuard(), new RolesGuard(reflector));

//   await app.listen(3000);
// }
// bootstrap();
import { RolesGuard } from './common/roles.guard';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { JwtAuthGuard } from './auth/jwt-auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  
  await app.listen(3000);
}
bootstrap();

