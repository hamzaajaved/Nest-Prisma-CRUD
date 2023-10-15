import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class UpdateUserRequestDTO {
    @Length(1, 255)
    @IsString()
    @ApiPropertyOptional()
    name?: string;

    @Length(1, 255)
    @IsEmail()
    @ApiPropertyOptional()
    email?: string;
}