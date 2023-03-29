import { HydratedDocument, Schema, model, Types } from 'mongoose';
import { TUser } from '../../User/model';

type GoalBox = {
  goalName: string;
  goalCost: number;
  goalTime: {
    initialDate: Date;
    endDate: Date;
  };
  balance: number;
  historicTransaction: {
    date: Date;
    amount: number;
    modeTransaction: 'LESS' | 'MORE';
  }[];
  user: Types.ObjectId | TUser;
};

export type TGoalBox = HydratedDocument<GoalBox>;

const GoalSchema = new Schema<TGoalBox>({
  goalName: {
    type: String,
    required: true,
  },
  goalCost: {
    type: Number,
    required: true,
  },
  goalTime: {
    initialDate: {
      type: Date,
      default: new Date()
    },
    endDate: {
      type: Date,
      required: true,
    }
  },
  balance: {
    type: Number,
    required: true
  },
  historicTransaction: [{
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true
    },
    modeTransaction: {
      type: String,
      enum: ['LESS', 'MORE'],
      required: true
    }
  }],
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },
});

const GoalBox = model<TGoalBox>('GoalBox', GoalSchema);

export default GoalBox;
