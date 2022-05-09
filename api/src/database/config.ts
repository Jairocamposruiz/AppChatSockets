import mongoose from 'mongoose';

import { config } from '../config';

export const dbConnection = async () => {
  try {
    await mongoose.connect(config.db.connection || '', {});
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error('Error in connection with database');
  }
}
