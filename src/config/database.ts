import mongoose from 'mongoose';
import log from '../logger';

async function connectDB() {
  const dbUri = process.env.MONGO_DB_URI as string;

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(dbUri);
    log.info('MongoDB Connected');
  } catch (error) {
    log.error(error);
    process.exit(1);
  }
}

export default connectDB;
