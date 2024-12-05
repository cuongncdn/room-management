import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: { username: string; password: string }) {
    const { username, password } = loginDto;

    // Thay bằng logic kiểm tra thông tin người dùng từ DB
    if (username === 'test' && password === 'password') {
      const payload = { username, sub: '12345', roles: ['user'] };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    throw new Error('Invalid username or password');
  }
}
