import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class LoginRequestDTO {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @ApiProperty({ enum: UserType })
  @IsEnum(UserType)
  type: UserType;
}
