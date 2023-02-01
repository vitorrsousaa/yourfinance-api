import { Request, Response } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';

class TransactionController {
  async index(req: Request, res: Response) {
    // Listar todos os registros
    try {
      const transaction = await TransactionsRepository.findAll();

      return res.send(transaction);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async show() {
    // Listar um registro
  }

  async store(req: Request, res: Response) {
    const { description, category, type, modality, value } = req.body;

    if (!description) {
      return res.status(400).send({ error: 'Description is required' });
    }
    if (!category) {
      return res.status(400).send({ error: 'category is required' });
    }
    if (!type) {
      return res.status(400).send({ error: 'type is required' });
    }
    if (!modality) {
      return res.status(400).send({ error: 'modality is required' });
    }
    if (!value) {
      return res.status(400).send({ error: 'value is required' });
    }

    const id = req.user.id;
    const user = id;

    try {
      const newTransaction = await TransactionsRepository.create(
        description,
        category,
        modality,
        type,
        user,
        value
      );

      return res.send(newTransaction);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: 'Registration failed' });
    }
  }

  async update() {
    // Atualizar
  }

  async delete() {
    // Deletar
  }
}

export default new TransactionController();
