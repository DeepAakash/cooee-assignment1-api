import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // To set 'api' as global prefix for all api requests
  app.setGlobalPrefix('api');

  // To allow port 4200 access the data
  app.enableCors({
    origin: [
      'http://localhost:4200', 
      'https://cooee-project1.vercel.app']
  })

  await app.listen(3000);
}
bootstrap();
