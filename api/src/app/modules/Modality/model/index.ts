import { HydratedDocument, model, Schema, Types } from 'mongoose';

type ModalityInfos = {
  name: string;
  category: Types.ObjectId;
};

export type TModality = HydratedDocument<ModalityInfos>;

const ModalitySchema = new Schema<TModality>({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Category',
  },
});

const Modality = model<TModality>('Modality', ModalitySchema);
export default Modality;
