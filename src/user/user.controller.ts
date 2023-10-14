import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('users')
@Controller('users')
export class UserController {

    @UseGuards(AuthGuard("jwt"))
    @ApiBearerAuth("Authorization")
    @Get('me')
    getMe() {
        return "user info"
    }
} 
