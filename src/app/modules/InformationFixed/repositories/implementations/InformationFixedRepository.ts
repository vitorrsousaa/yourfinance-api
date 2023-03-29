import InformationFixed, { TInformationFixed } from '../../model';
import { IInformationFixedRepository } from '../IInformationsFixedRepository';

class InformationFixedRepository implements IInformationFixedRepository {
  async registerInformation(fixedIncome: number, fixedOutcome: number, userId: string): Promise<TInformationFixed> {
    return InformationFixed.create({
      fixedIncome,
      fixedOutcome,
      user: userId
    });
  }

  async findUserOnInformation(userId: string): Promise<TInformationFixed | null> {
    return InformationFixed.findOne({ user: userId });
  }

  async updateInformations(
    infoId: string,
    fixedIncome: number,
    fixedOutcome: number
  ): Promise<TInformationFixed | null> {
    return InformationFixed.findByIdAndUpdate(infoId, {
      $set: {
        fixedIncome,
        fixedOutcome
      }
    }, { new: true });
  }
}

export default new InformationFixedRepository();
