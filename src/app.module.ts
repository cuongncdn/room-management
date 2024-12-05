import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/apartment-management'),
    AuthModule,
    UserModule,
    RoleModule,
  ],
})
export class AppModule {}
