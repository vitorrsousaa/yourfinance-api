import express from 'express';
import cors from 'cors';
import connect from './database/connect';

import routes from './app/routes';

connect();

// Adicionar os headers do cors manualmente
// Alterar todos os status do bloco catch para 500

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
