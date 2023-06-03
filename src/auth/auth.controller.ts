import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginRequestDTO, SignupRequestDTO } from './dto/request';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginRequestDTO) {
    return this.authService.login(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignupRequestDTO) {
    return this.authService.signup(dto);
  }
}
