import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lấy metadata roles từ handler
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // Nếu không yêu cầu roles, cho phép truy cập
    }

    // Lấy thông tin user từ request
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Kiểm tra nếu user không tồn tại hoặc không có roles
    if (!user || !user.roles) {
      return false; // Từ chối truy cập
    }

    // Kiểm tra roles của user có khớp với requiredRoles không
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
