import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRequestDTO, SignupRequestDTO } from './dto/request';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

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

    return this.signToken(user.id, user.email);
  }

  async login(dto: LoginRequestDTO) {
    const { email, password, type } = dto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new ForbiddenException('Incorrect Credentials');

    const isPasswordMatch = await argon.verify(user.password, password);

    if (!isPasswordMatch) throw new ForbiddenException('Invalid password');

    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      secret: secret,
      expiresIn: '15m',
    });

    return {
      token: token 
    }
  }
}
