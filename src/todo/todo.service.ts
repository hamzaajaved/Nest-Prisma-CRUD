import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { TodoRequestDTO } from './dto/request';
import { BooleanResponseDTO } from './dto/response';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async getTodos(currentUser: User) {
    const todos = await this.prismaService.todo.findMany({
      where: {
        id: currentUser.id,
      },
    });

    const count = await this.prismaService.todo.count({
      where: {
        id: currentUser.id,
      },
    });

    return { data: todos, count };
  }

  async createTodo(
    currentUser: User,
    dto: TodoRequestDTO,
  ): Promise<BooleanResponseDTO> {
    const { title, description, completed } = dto;

    await this.prismaService.todo.create({
      data: {
        userId: currentUser.id,
        title,
        description,
        completed,
      },
    });

    return {
      data: true,
    };
  }
}
