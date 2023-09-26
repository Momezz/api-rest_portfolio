/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import {
  createProfile,
  deleteProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
} from './profile.services';

export async function handleAllGetProfiles(req: Request, res: Response, next: NextFunction) {
  try {
    const profiles = await getAllProfiles();
    return res.status(200).json(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetProfile(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const profile = await getProfileById(id);
    if (!profile) {
      return res.status(404).json({ message: 'profile not found' });
    }
    return res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateProfile(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const profile = await createProfile(data);
    return res.status(201).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateProfile(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;
  const product = await updateProfile(id, data);
  if (!product) {
    return res.status(404).json({ message: 'Profile not found' });
  }
  return res.status(200).json(product);
}

export async function handleDeleteProfile(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteProfile(id);
    return res.status(200).json({ message: 'Profile deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
