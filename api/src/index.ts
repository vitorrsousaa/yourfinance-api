import express from 'express';
import cors from 'cors';
import connect from './database/connect';
import { router } from './router';
import errorHandler from './app/middlewares/errorHandler';

connect();

// Adicionar os headers do cors manualmente
// Alterar todos os status do bloco catch para 500

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
