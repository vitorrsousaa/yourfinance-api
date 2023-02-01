import { model, Schema } from 'mongoose';

const ModalitySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  },
});

const Modality = model('Modality', ModalitySchema);

export default Modality;
