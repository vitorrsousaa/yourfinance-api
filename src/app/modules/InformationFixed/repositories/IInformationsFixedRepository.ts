import { Types } from 'mongoose';
import { TInformationFixed } from '../model';

export interface IInformationFixedRepository {
  registerInformation(
    name: string,
    time: number,
    amount: number,
    category: Types.ObjectId,
    userId: string
  ): Promise<TInformationFixed>;
  findUniqueInformationById(id: string): Promise<TInformationFixed | null>;
  findUserOnInformation(userId: string): Promise<TInformationFixed[] | null>;
  updateTimeInformation(
    infoId: string,
    time: number
  ): Promise<TInformationFixed | null>;
  updateAmountInformation(
    infoId: string,
    amount: number
  ): Promise<TInformationFixed | null>;
  addTransactionsOnInformation(idInformation: Types.ObjectId, idsTransactions: Types.ObjectId[]): Promise<TInformationFixed | null>;
  addNewUpdateOnHistoric(id: Types.ObjectId, property: string, value: number): Promise<TInformationFixed | null>;
}
