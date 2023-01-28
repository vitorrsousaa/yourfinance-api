import express from 'express';

import connect from './database/connect';

connect();

const app = express();

const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
