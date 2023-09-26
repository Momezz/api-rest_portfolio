import {
  Schema, model, Document,
} from 'mongoose';

export interface ProfileDocument extends Document {
  id: String,
  name: String,
  profilePicture: String,
  bannerImage: String,
}

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  profilePicture: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Profile = model<ProfileDocument>('Profile', ProfileSchema);

export default Profile;
