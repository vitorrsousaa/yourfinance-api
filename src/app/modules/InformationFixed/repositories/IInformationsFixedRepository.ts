import { TInformationFixed } from '../../../entities/informationFixed/TInformationFixed';

export interface IInformationFixedRepository {
  registerInformation(
    name: string,
    time: number,
    amount: number,
    categoryId: string,
    userId: string
  ): Promise<TInformationFixed>;
  findUniqueInformationById(id: string): Promise<TInformationFixed | null>;
  findUserOnInformation(userId: string): Promise<TInformationFixed[] | null>;
  updateTimeInformation(
    id: string,
    time: number
  ): Promise<TInformationFixed | null>;
  updateAmountInformation(
    id: string,
    amount: number
  ): Promise<TInformationFixed | null>;
  addNewUpdateOnHistoric(id: string, property: string, value: number): Promise<TInformationFixed | null>;
  deleteInformation(id: string): Promise<unknown>;
}
