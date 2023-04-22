import { Types } from 'mongoose';
import InformationFixed, { TInformationFixed } from '../../model';
import { IInformationFixedRepository } from '../IInformationsFixedRepository';

class InformationFixedRepository implements IInformationFixedRepository {
  async registerInformation(
    name: string,
    time: number,
    amount: number,
    category: Types.ObjectId,
    userId: string,
  ): Promise<TInformationFixed> {
    return InformationFixed.create({
      name,
      time,
      amount,
      category,
      transactions: [],
      user: userId
    });
  }

  async findUniqueInformationById(id: string): Promise<TInformationFixed | null> {
    return InformationFixed.findOne({ _id: id });
  }

  async findUserOnInformation(userId: string): Promise<TInformationFixed[] | null> {
    return InformationFixed.find({ user: userId });
  }

  async updateTimeInformation(
    infoId: string,
    time: number
  ): Promise<TInformationFixed | null> {
    return InformationFixed.findByIdAndUpdate(infoId, {
      $set: {
        time,
      }
    }, { new: true });
  }

  async updateAmountInformation(
    infoId: string,
    amount: number
  ): Promise<TInformationFixed | null> {
    return InformationFixed.findOneAndUpdate({ _id: infoId, time: { $gte: new Date() } }, {
      $set: {
        amount,
      }
    }, { new: true });
  }

  async addTransactionsOnInformation(
    idInformation: Types.ObjectId,
    idsTransactions: Types.ObjectId[]
  ): Promise<TInformationFixed | null> {
    return InformationFixed.findByIdAndUpdate(idInformation, {
      $push: {
        transactions: idsTransactions
      }
    }, { new: true });
  }

  async addNewUpdateOnHistoric(
    id: Types.ObjectId,
    property: string,
    value: number
  ): Promise<TInformationFixed | null> {
    return InformationFixed.findByIdAndUpdate(id, {
      $push: {
        historic: {
          property,
          value
        }
      }
    }, { new: true });
  }
}

export default new InformationFixedRepository();
