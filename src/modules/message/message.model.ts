import {
  Schema, model, Document,
} from 'mongoose';

export interface MessageDocument extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    requires: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Message = model<MessageDocument>('Message', MessageSchema);

export default Message;
