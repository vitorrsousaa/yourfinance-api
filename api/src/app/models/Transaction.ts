import { model, Schema } from 'mongoose';

const TransactionSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
  category: {
    type: String,
    require: true,
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
});

const Transaction = model('Transaction', TransactionSchema);

export default Transaction;
