import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // Thay bằng secret key của bạn
    });
  }

  async validate(payload: any) {
    // Trả về thông tin user được thêm vào request
    return { userId: payload.sub, username: payload.username, roles: payload.roles };
  }
}
