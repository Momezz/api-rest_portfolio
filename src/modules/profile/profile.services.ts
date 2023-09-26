/* eslint-disable no-shadow */
import Profile, { ProfileDocument } from './profile.model';

export function getAllProfiles() {
  return Profile.find();
}

export function getProfileById(id: string) {
  const profile = Profile.findById(id);
  return profile;
}

export function createProfile(profile: ProfileDocument) {
  return Profile.create(profile);
}

export function updateProfile(id: string, profile: ProfileDocument) {
  const updateProfile = Profile.findByIdAndUpdate(id, profile, { new: true });
  return updateProfile;
}

export function deleteProfile(id: string) {
  const deleteProfile = Profile.findByIdAndDelete(id);
  return deleteProfile;
}
