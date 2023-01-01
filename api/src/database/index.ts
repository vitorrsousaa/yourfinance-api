import mongoose from 'mongoose';

const mongo_url =
  'mongodb+srv://mongodb:mongodb@cluster0.s9ileoe.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongo_url).then(() => {
  console.log('Server connected with mongoDb');
});
