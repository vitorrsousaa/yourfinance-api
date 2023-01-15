import mongoose from 'mongoose';

const mongo_url = '';

mongoose.connect(mongo_url).then(() => {
  console.log('Server connected with mongoDb');
});
