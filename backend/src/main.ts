

// import { RolesGuard } from './common/roles.guard';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Swagger Config
//   const config = new DocumentBuilder()
//     .setTitle('Auth API')
//     .setDescription('Shikavni fullstack Auth API docs')
//     .setVersion('1.0')
//     .addCookieAuth('jwt') // If you're using cookie-based auth
//     .build();


//   app.use(cookieParser());

//   app.enableCors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   });

  
//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './common/roles.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // 🛡️ Apply Global Guards
  // const reflector = app.get(Reflector);
  // app.useGlobalGuards(new JwtAuthGuard(), new RolesGuard(reflector));

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector), new RolesGuard(reflector));

  // 📄 Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription(' Fullstack Auth API Documentation')
    .setVersion('1.0')
    .addCookieAuth('jwt') // Cookie-based JWT auth
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
