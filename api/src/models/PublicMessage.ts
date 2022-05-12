import { Schema, model, StringSchemaDefinition } from 'mongoose';

interface PublicMessage {
  from: StringSchemaDefinition;
  chat: StringSchemaDefinition;
  message: String;
}

const PublicMessageSchema = new Schema<PublicMessage>({
  from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
  message: { type: String, required: true }
}, {
  timestamps: true
})

PublicMessageSchema.method('toJSON', function () {
  const { __v, ...rest } = this.toObject();
  return rest;
})

export default model<PublicMessage>('PublicMessage', PublicMessageSchema);
