import dotenv from 'dotenv';

dotenv.config();

const cloudinary = require('cloudinary').v2;

// eslint-disable-next-line consistent-return
export async function uploadImage(image: string) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'portfolio',
      use_filename: true,
      unique_filename: false,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default uploadImage;
