import express from 'express';
import router from './controllers/authController';

const app = express();

const port = 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
