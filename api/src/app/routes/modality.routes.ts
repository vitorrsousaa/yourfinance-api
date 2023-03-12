import { Router } from 'express';
import ModalityController from '../controllers/ModalityController';

const modalityRoutes = Router();

modalityRoutes.post('/modality', ModalityController.store);
modalityRoutes.get('/modality', ModalityController.index);

export default modalityRoutes;
