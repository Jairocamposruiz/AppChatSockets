import { Schema, model } from 'mongoose';

interface Chat {
  name: string;
  icon: string;
}

const ChatSchema = new Schema<Chat>({
  name: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
})

ChatSchema.method('toJSON', function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.uid = _id;
  return rest;
})

export default model<Chat>('Chat', ChatSchema);
