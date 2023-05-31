import { NestFactory } from '@nestjs/core';
import  { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync} from 'fs';
import { stringify } from 'yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test Swagger')
    .setDescription('Pending')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);

  // generate yaml based doc
  const yamlString: string = stringify(document, {});
  writeFileSync('./swagger.yaml', yamlString);

  SwaggerModule.setup('/api', app, document);
  
  await app.listen(3000);
}
bootstrap();
