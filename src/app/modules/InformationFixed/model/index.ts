import { HydratedDocument, Schema, model, Types } from 'mongoose';
import { TUser } from '../../User/model';

type InformationFixed = {
  fixedOutcome: number;
  fixedIncome: number;
  user: Types.ObjectId | TUser;
};

export type TInformationFixed = HydratedDocument<InformationFixed>;

const InfomationSchema = new Schema<TInformationFixed>({
  fixedIncome: {
    type: Number,
    required: true,
  },
  fixedOutcome: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },
});

const InformationFixed = model<TInformationFixed>('InformationFixed', InfomationSchema);

export default InformationFixed;
