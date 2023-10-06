import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDTO {
    @ApiProperty({ description: 'Token' })
    token: string;
}