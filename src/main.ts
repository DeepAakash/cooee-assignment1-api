import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // To set 'api' as global prefix for all api requests
  app.setGlobalPrefix('api');

  // Define the array of allowed origins
  const allowedOrigins: string[] = [
    'http://localhost:4200',
    'https://cooee-project1.vercel.app',
    // Add more origins as needed
  ];

  // To allow port 4200 and vercel access the data
  const cors = require('cors');
  const corsOptions ={
    origin:allowedOrigins, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    preflightContinue: false,
}

  app.use(cors(corsOptions));

  // await app.listen(3000);

  let port: number;
  if (process.env.NODE_ENV === 'production') {
    // Use the port specified by the hosting environment in production
    port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  } else {
    port = 3000; // Use port 3000 for development
  }

  await app.listen(port);
}
bootstrap();