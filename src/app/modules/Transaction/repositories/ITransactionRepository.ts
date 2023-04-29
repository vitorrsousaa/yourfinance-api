import { TCategory } from '../../../entities/category/TCategory';
import { TModality } from '../../../entities/modality/TModality';
import { TTransaction } from '../../../entities/transaction/TTransaction';


export type TReturnTransactionsWithCategoryAndModality = (TTransaction & { Category: TCategory; Modality: TModality; });

export interface ITransactionRepository {
  create(
    name: string,
    categoryId: string,
    modalityId: string,
    type: string,
    userId: string,
    amount: number,
    date: Date,
    informationFixedId: string
  ): Promise<TTransaction>;
  findTransactionByIdUserAndPage(id: string, page: number): Promise<TReturnTransactionsWithCategoryAndModality[] | null>;
  findByPeriod(id: string, month: string): Promise<TTransaction[] | null>;
  findByDateAgo(id: string, date: Date): Promise<TTransaction[] | null>;
  findById(id: string): Promise<TTransaction | null>;
  delete(id: string): Promise<unknown>;
  updateManyTransactionsWithTimeGreaterThan(
    idInformation: string,
    dateGreaterThan: Date,
    newValueAmount: number
  ): Promise<TTransaction[] | unknown>;
  deleteManyTransactionWithTimeGreaterThan(
    idInformation: string,
    dateGreaterThan: Date
  ): Promise<unknown>;
  findAllTransactionsByUser(userId: string): Promise<(TTransaction & { Category: TCategory })[] | null>;
}
