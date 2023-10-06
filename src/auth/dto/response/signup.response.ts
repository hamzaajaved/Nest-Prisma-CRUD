import { ApiProperty } from '@nestjs/swagger';

export class SignUpResponseDTO {
    @ApiProperty({ description: 'Token' })
    token: string;
}