import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const mongo_url = process.env.PORT
  ? process.env.MONGO_URI_PROD || ''
  : process.env.MONGO_URI_DEV || '';

async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongo_url);

    console.log('Connected with MongoDB');
  } catch (err) {
    console.log(err);
  }
}

export default connect;
