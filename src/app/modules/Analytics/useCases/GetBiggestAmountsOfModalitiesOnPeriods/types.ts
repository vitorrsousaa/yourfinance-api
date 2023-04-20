import { Types } from 'mongoose';

export type TObjModality = {
  _id: Types.ObjectId;
  name: string;
  category: Types.ObjectId;
  amount: number;
}

export type TB = {
  [key: string]: {
    modality: TObjModality[];
    added?: boolean;
  }
  0: {
    modality: TObjModality[];
    added?: boolean;
  };
  3: {
    modality: TObjModality[];
    added?: boolean;
  }
  6: {
    modality: TObjModality[];
    added?: boolean;
  }
  12: {
    modality: TObjModality[];
    added?: boolean;
  }
}
