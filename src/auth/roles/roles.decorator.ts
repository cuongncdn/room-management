import { SetMetadata } from '@nestjs/common';

// Key dùng để lưu metadata trong Reflector
export const ROLES_KEY = 'roles';

/**
 * Custom decorator @Roles()
 * - roles: Danh sách các role cần thiết để truy cập
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
