import { HydratedDocument, model, Schema } from 'mongoose';

type ModalityInfos = {
  name: string;
};

export type TModality = HydratedDocument<ModalityInfos>;

const ModalitySchema = new Schema<TModality>({
  name: {
    type: String,
    require: true,
  },
});

const Modality = model<TModality>('Modality', ModalitySchema);
export default Modality;
