import { HydratedDocument, Schema, model, Types } from 'mongoose';
import { TUser } from '../../User/model';
import { TCategory } from '../../Category/model';

type InformationFixed = {
  name: string;
  time: number;
  amount: number;
  category: Types.ObjectId | TCategory;
  transactions: (Types.ObjectId | string)[];
  user: Types.ObjectId | TUser;
  createdAt: Date;
  updatedAt: Date;
  historic: {
    property: 'TIME' | 'AMOUNT';
    value: number;
    updatedAt: Date;
  }[];
};

export type TInformationFixed = HydratedDocument<InformationFixed>;

const InfomationSchema = new Schema<TInformationFixed>({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  transactions: [{
    type: Types.ObjectId,
    required: true,
    ref: 'Transaction'
  }],
  user: {
    type: Types.ObjectId,
    require: true,
    ref: 'User',
  },
  historic: [{
    property: {
      type: String,
      enum: ['TIME', 'AMOUNT']
    },
    value: {
      type: Number,
    },
    updatedAt: {
      type: Date,
      default: new Date()
    }
  }]
}, {
  timestamps: true
});

const InformationFixed = model<TInformationFixed>('InformationFixed', InfomationSchema);

export default InformationFixed;
