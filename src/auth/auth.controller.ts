import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Gốc URL cho các route trong AuthController
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // Route: /auth/login
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto);
  }
}
