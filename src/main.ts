import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsMiddleware } from './cors.middleware'; // Import CorsMiddleware

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // Use CorsMiddleware globally
  app.use(new CorsMiddleware().use);

  let port: number;
  if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  } else {
    port = 3000;
  }

  await app.listen(port);
}
bootstrap();
