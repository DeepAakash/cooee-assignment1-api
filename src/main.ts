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

  // Define the array of allowed origins
  const allowedOrigins: string[] = [
    'http://localhost:4200',
    'https://cooee-project1.vercel.app',
    // Add more origins as needed
  ];
  
  // To allow port 4200 and vercel access the data
  const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the headers you want to allow
    credentials: true, // Enable credentials such as cookies and authorization headers
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
