import { TInformationFixed } from '../../../entities/informationFixed/TInformationFixed';

export interface IInformationFixedRepository {
  findUniqueInformationById(id: string): Promise<TInformationFixed | null>;
  findUserOnInformation(userId: string): Promise<TInformationFixed[] | null>;
}
