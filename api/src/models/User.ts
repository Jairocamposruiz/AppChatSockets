import { Schema, model } from 'mongoose';

interface User {
  name: string;
  password: string;
  online?: boolean;
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  online: { type: Boolean, default: false }
})

UserSchema.method('toJSON', function () {
  const { __v, _id, password, ...rest } = this.toObject();
  rest.uid = _id;
  return rest;
})

export default model<User>('User', UserSchema);
