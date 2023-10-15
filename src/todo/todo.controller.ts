import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { TodoService } from './todo.service';
import { CurrentUser } from 'src/decorators';
import { JwtGuard } from 'src/auth/guard';
import { TodoResponseDTO } from './dto/response';
import { TodoRequestDTO } from './dto/request';

@Controller('/todo')
@ApiTags('todo')
@UseGuards(JwtGuard)

export class TodoController {
    constructor(private TodoService: TodoService){}
    
    @Get("/")
    @ApiBearerAuth('Authorization')
    @ApiResponse({type: TodoResponseDTO})
    getTodos (@CurrentUser() user: User) {
        return this.TodoService.getTodos(user)
    }

    @Get("/:id")
    @ApiBearerAuth('Authorization')
    getTodosById (id: number) {

    }

    @Post("/")
    @ApiBearerAuth('Authorization')
    @ApiResponse({type: TodoResponseDTO})
    createTodo (@CurrentUser() user: User, @Body() dto: TodoRequestDTO) {
        return this.TodoService.createTodo(user, dto)
    }
}
        