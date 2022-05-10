import { Schema, model, StringSchemaDefinition } from 'mongoose';

interface Message {
  from: StringSchemaDefinition;
  to: StringSchemaDefinition;
  message: String;
}

const MessageSchema = new Schema<Message>({
  from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true }
}, {
  timestamps: true
})

MessageSchema.method('toJSON', function () {
  const { __v, ...rest } = this.toObject();
  return rest;
})

export default model<Message>('Message', MessageSchema);
