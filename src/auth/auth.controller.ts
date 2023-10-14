import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginRequestDTO, SignupRequestDTO } from './dto/request';
import { LoginResponseDTO, SignUpResponseDTO } from './dto/response';


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiResponse({type: LoginResponseDTO})
  login(@Body() dto: LoginRequestDTO) {
    return this.authService.login(dto);
  }

  @Post('signup')
  @ApiResponse({type: SignUpResponseDTO})
  signup(@Body() dto: SignupRequestDTO) {
    return this.authService.signup(dto);
  }
}
