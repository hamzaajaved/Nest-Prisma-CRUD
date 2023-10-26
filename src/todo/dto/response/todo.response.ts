import { ApiProperty } from '@nestjs/swagger';

class TodoModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  completed: boolean;
}

export class TodoResponseDTO {
    @ApiProperty({isArray: true, type: TodoModel})
    data: Array<TodoModel>

    @ApiProperty()
    count: number;
}

export class getTodoByIdResponseDTO extends TodoModel {}

export class BooleanResponseDTO {
  data: boolean
} 