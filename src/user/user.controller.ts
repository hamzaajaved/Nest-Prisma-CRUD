import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { JwtGuard } from 'src/auth/guard';
import { CurrentUser } from 'src/decorators';

@UseGuards(JwtGuard)
@ApiTags('user')
@Controller('user')
export class UserController {

    @ApiBearerAuth("Authorization")
    @Get('me')
    getMe(@CurrentUser() user: User) {
        return user;
    }
} 
