import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from './cors.middleware'; // Import CorsOptions from the middleware file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // To allow port 4200 and vercel access the data
  const cors = require('cors');
  app.use(cors(CorsOptions)); // Use CorsOptions here

  let port: number;
  if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  } else {
    port = 3000;
  }

  await app.listen(port);
}
bootstrap();
