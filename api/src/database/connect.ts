import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const mongo_url = process.env.MONGO_URI ? process.env.MONGO_URI : '';

async function connect() {
  try {
    await mongoose.connect(mongo_url);

    console.log('Connected with MongoDB');
  } catch (err) {
    console.log(err);
  }
}

export default connect;
