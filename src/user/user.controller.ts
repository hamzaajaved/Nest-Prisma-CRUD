import { Controller, Get, Patch, UseGuards,Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { JwtGuard } from 'src/auth/guard';
import { CurrentUser } from 'src/decorators';
import { UserService } from './user.service';
import { UpdateUserRequestDTO } from './dto/request';
import { UpdateUseResponseDTO } from './dto/response';

@UseGuards(JwtGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiBearerAuth("Authorization")
    @Get('me')
    getMe(@CurrentUser() user: User) {
        return user;
    }

    @ApiBearerAuth("Authorization")
    @Patch("/:id")
    UpdateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: UpdateUserRequestDTO,
        @CurrentUser() user: User
    ): Promise<UpdateUseResponseDTO> {
       return this.userService.updateUser(id, data, user)
    }
} 
  