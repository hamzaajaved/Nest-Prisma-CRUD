import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  controllers:[AppController],
  providers: [AppService]
})
export class AppModule {}
