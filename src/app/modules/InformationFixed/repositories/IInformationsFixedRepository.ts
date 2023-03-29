import { TInformationFixed } from '../model';

export interface IInformationFixedRepository {
  registerInformation(
    fixedIncome: number,
    fixedOutcome: number,
    userId: string
  ): Promise<TInformationFixed>;
  findUserOnInformation(userId: string): Promise<TInformationFixed | null>;
  updateInformations(
    infoId: string,
    fixedIncome: number,
    fixedOutcome: number
  ): Promise<TInformationFixed | null>;
}
