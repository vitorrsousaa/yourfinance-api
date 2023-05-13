import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import apiDocumentation from '../api-documentation.json';
import corsOptions from './middlewares/cors';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.use(errorHandler);

export default app;
