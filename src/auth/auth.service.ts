import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRequestDTO, SignupRequestDTO } from './dto/request';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login(dto: LoginRequestDTO) {
    return { message: 'Hello World!' };
  }

  async signup(dto: SignupRequestDTO) {
    const { name, email, password, type } = dto;

    const hash = await argon.hash(password);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        type,
      },
    });

    return user;
  }
}
