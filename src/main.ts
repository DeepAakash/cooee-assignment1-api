import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // To set 'api' as global prefix for all api requests
  app.setGlobalPrefix('api');

  // To allow port 4200 access the data
  // app.enableCors({
  //   origin: [
  //     'http://localhost:4200']
  // })

  // To allow port 4200 and vercel access the data
  const corsOptions: CorsOptions = {
    origin: [
      'http://localhost:4200', 
      'https://cooee-project1.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
