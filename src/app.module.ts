import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TestsController } from './tests/tests.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, TestsController],
  providers: [AppService],
})
export class AppModule {}
