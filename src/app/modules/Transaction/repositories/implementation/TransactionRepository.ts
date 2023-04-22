import { Types, UpdateWriteOpResult } from 'mongoose';
import Transaction, { TTransaction } from '../../model';
import { ITransactionRepository, TReturnTransactionsWithCategoryAndModality } from '../ITransactionRepository';

class TransactionRepository implements ITransactionRepository {
  async findAllByIdUser(id: string): Promise<TTransaction[]> {
    return Transaction.find()
      .where('user')
      .equals(id)
      .populate('modality')
      .populate('category')
      .sort({ date: -1 });
  }

  async findById(id: string): Promise<TTransaction | null> {
    return Transaction.findById(id).populate('modality');
  }

  async findByPeriod(
    id: string,
    month: string
  ): Promise<TReturnTransactionsWithCategoryAndModality[] | null> {
    const endDate = new Date();

    const year = endDate.getFullYear();
    const lastMonths = endDate.getMonth() - parseInt(month);
    const day = endDate.getDay();

    const startDate = new Date(year, lastMonths, day);

    return Transaction.find({ date: { $gte: startDate, $lte: endDate } })
      .where('user')
      .equals(id)
      .populate('category')
      .populate('modality');
  }
  async findByDateAgo(id: string, date: Date): Promise<TReturnTransactionsWithCategoryAndModality[] | null> {
    const endDate = new Date();

    return Transaction.find({ date: { $gte: date, $lte: endDate } })
      .where('user')
      .equals(id)
      .populate('category')
      .populate('modality');
  }

  async create(
    description: string,
    category: Types.ObjectId,
    modality: Types.ObjectId,
    type: string,
    user: string,
    amount: number,
    date: Date,
    informationFixed?: Types.ObjectId
  ): Promise<TTransaction> {
    return Transaction.create({
      description,
      category,
      modality,
      type,
      user,
      amount,
      date,
      informationFixed
    });
  }

  async delete(id: string): Promise<void | null> {
    return Transaction.findByIdAndDelete(id);
  }

  async updateManyTransactionsWithTimeGreaterThan(
    idInformation: Types.ObjectId,
    dateGreaterThan: Date,
    newValueAmount: number
  ): Promise<UpdateWriteOpResult> {
    return Transaction.updateMany(
      {
        informationFixed: idInformation,
        date: { $gte: dateGreaterThan }
      }, {
        $set: {
          amount: newValueAmount
        }
      }, { new: true });
  }

  async deleteManyTransactionWithTimeGreaterThan(idInformation: Types.ObjectId, dateGreaterThan: Date): Promise<unknown> {
    console.log(dateGreaterThan);
    const deleteTran = await Transaction.deleteMany(
      {
        informationFixed: idInformation,
        date: { $gte: dateGreaterThan }
      }
    );
    console.log(deleteTran);
    return deleteTran;
  }
}

export default new TransactionRepository();
