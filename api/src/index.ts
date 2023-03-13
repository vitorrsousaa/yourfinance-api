import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import connect from './database/connect';
import apiDocumentation from '../api-documentation.json';

import routes from './app/routes';

connect();

// Adicionar os headers do cors manualmente
// Alterar todos os status do bloco catch para 500

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
