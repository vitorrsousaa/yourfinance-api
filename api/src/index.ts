import express from 'express';
import cors from 'cors';
import connect from './database/connect';
import { router } from './router';

connect();

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
