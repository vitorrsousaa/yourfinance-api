import { model, Schema } from 'mongoose';

const TransactionSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: ['Receita', 'Despesa'],
    require: true,
  },
  type: {
    type: ['Fixo', 'Variável'],
    require: true,
  },
  modality: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Modality',
  },
  value: {
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
