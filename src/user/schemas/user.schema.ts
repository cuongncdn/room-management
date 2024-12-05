import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [String], default: [] }) // Danh sách roles
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
