import { HydratedDocument, model, Schema, Types } from 'mongoose';
import { TCategory } from '../../Category/model';
import { TModality } from '../../Modality/model';

type TransactionInfos = {
  description: string;
  date: Date;
  updatedAt: Date;
  category: Types.ObjectId | TCategory;
  type: string;
  modality: Types.ObjectId | TModality;
  amount: number;
  user: Types.ObjectId;
  _doc: TTransaction;
};

export type TTransaction = HydratedDocument<TransactionInfos>;

const TransactionSchema = new Schema<TTransaction>({
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Category',
  },
  type: {
    type: String,
    require: true,
  },
  modality: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Modality',
  },
  amount: {
    type: Number,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = model<TTransaction>('Transaction', TransactionSchema);

export default Transaction;
