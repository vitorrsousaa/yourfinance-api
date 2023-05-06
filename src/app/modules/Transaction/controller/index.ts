import { Request, Response } from 'express';

import Create from '../useCases/Create';
import Delete from '../useCases/Delete';
import GetAllTransactionByUser from '../useCases/GetAllTransactionByUser';
import ListTransactionsByPage from '../useCases/ListTransactionsByPage';

class TransactionController {
  async index(request: Request, response: Response) {
    const { page } = request.query;
    const id = request.user.id;

    if (page) {
      const listTransactionsByPage = await ListTransactionsByPage(Number(page), id);
      return response.status(200).send(listTransactionsByPage);
    }

    const transactions = await GetAllTransactionByUser(id);

    return response.status(200).json(transactions);

  }

  async store(request: Request, response: Response) {
    const id = request.user.id;

    const {
      infosTransaction,
      isInformationFixed,
      idInformationFixed
    } = request.body;

    const createTransaction = await Create(
      infosTransaction,
      id,
      isInformationFixed,
      idInformationFixed
    );

    return response.status(201).send(createTransaction);
  }

  async delete(request: Request, response: Response) {
    const { transactionId } = request.params;

    await Delete(transactionId);

    return response.sendStatus(204);
  }
}

export default new TransactionController();
