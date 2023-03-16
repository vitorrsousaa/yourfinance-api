import { Router } from 'express';

import CategoryController from '../modules/Category/controller';

const categoryRoutes = Router();

categoryRoutes.get('/', CategoryController.index);
categoryRoutes.post('/', CategoryController.store);
categoryRoutes.delete('/:id?', CategoryController.delete);

export default categoryRoutes;
