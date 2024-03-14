import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'https://cooee-project1.vercel.app/',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  let port: number;
  if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  } else {
    port = 3000;
  }

  await app.listen(port);
}
bootstrap();
