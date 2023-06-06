import { TCategory } from '../../../entities/category/TCategory';
import { TModality } from '../../../entities/modality/TModality';
import {
  TransactionCreateRequestDTO,
  TransactionGetRequestDTO,
} from '../../../entities/transaction/dtos';
import { TTransaction } from '../../../entities/transaction/TTransaction';

export type TReturnTransactionsWithCategoryAndModality = TTransaction & {
  Category: TCategory;
  Modality: TModality;
};

export interface ITransactionRepository {
  create({
    name,
    categoryId,
    modalityId,
    type,
    userId,
    amount,
    date,
    informationFixedId,
  }: TransactionCreateRequestDTO): Promise<TTransaction>;
  findByPeriod({
    id,
    month,
  }: TransactionGetRequestDTO<string>): Promise<TTransaction[] | null>;
  findByDateAgo({
    id,
    date,
  }: TransactionGetRequestDTO<Date>): Promise<TTransaction[] | null>;
  findById(id: string): Promise<TTransaction | null>;
  delete(id: string): Promise<unknown>;
  findAllTransactionsByUser(
    userId: string
  ): Promise<(TTransaction & { Category: TCategory })[] | null>;
}
