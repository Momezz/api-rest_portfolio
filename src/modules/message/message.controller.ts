/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
} from './message.services';

export async function handleAllGetMessages(req: Request, res: Response, next: NextFunction) {
  try {
    const messages = await getAllMessages();
    return res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetMessage(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const message = await getMessageById(id);
    if (!message) {
      return res.status(404).json({ message: 'message not found' });
    }
    return res.status(200).json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateMessage(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const message = await createMessage(data);
    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateMessage(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;
  const product = await updateMessage(id, data);
  if (!product) {
    return res.status(404).json({ message: 'Message not found' });
  }
  return res.status(200).json(product);
}

export async function handleDeleteMessage(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteMessage(id);
    return res.status(200).json({ message: 'Message deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
