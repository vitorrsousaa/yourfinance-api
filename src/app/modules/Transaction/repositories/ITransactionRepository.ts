import { Types, UpdateWriteOpResult } from 'mongoose';
import { TTransaction } from '../model';
import { TCategory } from '../../Category/model';
import { TModality } from '../../Modality/model';

export type TReturnTransactionsWithCategoryAndModality = Omit<TTransaction, 'category' |  'modality'> & {
  category: TCategory;
  modality: TModality;
}

export interface ITransactionRepository {
  create(
    description: string,
    category: Types.ObjectId,
    modality: Types.ObjectId,
    type: string,
    user: string,
    amount: number,
    date: Date
  ): Promise<TTransaction>;
  findAllByIdUser(id: string): Promise<TTransaction[] | null>;
  findByPeriod(id: string, month: string): Promise<TTransaction[] | null>;
  findByDateAgo(id: string, date: Date): Promise<TTransaction[] | null>;
  findById(id: string): Promise<TTransaction | null>;
  delete(id: string): Promise<void | null>;
  updateManyTransactionsWithTimeGreaterThan(
    idInformation: Types.ObjectId,
    dateGreaterThan: Date,
    newValueAmount: number
  ): Promise<UpdateWriteOpResult>;
  deleteManyTransactionWithTimeGreaterThan(
    idInformation: Types.ObjectId,
    dateGreaterThan: Date
  ): Promise<unknown>;
}
