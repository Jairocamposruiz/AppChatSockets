import { Schema, model, StringSchemaDefinition } from 'mongoose';

interface PublicMessage {
  from: StringSchemaDefinition;
  to: StringSchemaDefinition;
  message: String;
}

const PublicMessageSchema = new Schema<PublicMessage>({
  from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
  message: { type: String, required: true }
}, {
  timestamps: true
})

export default model<PublicMessage>('PublicMessage', PublicMessageSchema);
