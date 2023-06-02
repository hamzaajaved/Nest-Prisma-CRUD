import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodoModule, UserModule, AuthModule],
})
export class AppModule {}
