import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResultTransformInterceptor } from './interceptors/result-transform-interceptor';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.useGlobalInterceptors(new ResultTransformInterceptor(new Reflector()));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
