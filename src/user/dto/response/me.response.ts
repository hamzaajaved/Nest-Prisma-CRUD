import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

class UserModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({enum: UserType})
  type: UserType
}

export class GetMeResponseDTO {
  @ApiProperty()
  user: UserModel;
}
