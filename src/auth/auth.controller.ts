import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return { message: 'Hello from Login' };
  }

  @Post('signup')
  signup() {
    return { message: 'Hello from Signup' };
  }
}
