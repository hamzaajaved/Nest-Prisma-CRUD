import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TodoModule,
    UserModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
