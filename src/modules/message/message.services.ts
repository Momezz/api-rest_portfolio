/* eslint-disable no-shadow */
import Message, { MessageDocument } from './message.model';

export function getAllMessages() {
  return Message.find();
}

export function getMessageById(id: string) {
  const message = Message.findById(id);
  return message;
}

export function createMessage(message: MessageDocument) {
  return Message.create(message);
}

export function updateMessage(id: string, message: MessageDocument) {
  const updateMessage = Message.findByIdAndUpdate(id, message, { new: true });
  return updateMessage;
}

export function deleteMessage(id: string) {
  const deleteMessage = Message.findByIdAndDelete(id);
  return deleteMessage;
}
