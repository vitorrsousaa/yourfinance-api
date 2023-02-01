import { Request, Response } from 'express';
import ModalitiesRepository from '../repositories/ModalitiesRepository';

class ModalityController {
  async store(req: Request, res: Response) {
    // Criar um novo registro
    const { name, icon } = req.body;

    if (!name) {
      return res.status(400).send({ error: 'Name is required' });
    }

    if (!icon) {
      return res.status(400).send({ error: 'Icon is required' });
    }

    try {
      const modalityExists = await ModalitiesRepository.findByName(name);

      if (modalityExists) {
        return res.status(401).send({ error: 'Modality already exists' });
      }

      const newModality = await ModalitiesRepository.create(name, icon);

      return res.send({ modality: newModality });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async index(req: Request, res: Response) {
    // Listar todos os registros
    try {
      const modalities = await ModalitiesRepository.findAll();

      return res.send(modalities);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async show() {
    // Listar um registro
  }

  async delete() {
    // Deletar um registro
  }
}

export default new ModalityController();
